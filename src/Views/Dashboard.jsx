import { useEffect, useMemo, useState, createContext, useContext } from 'react'
import OrderFilter from './OrderFilter'
import OrderList from './OrderList'
import OrderStats from './OrderStats'
import { Link } from 'react-router-dom'
import '../Css/Dashboard.css'
// Removed embedded Formulario to avoid duplication with standalone route

const initialOrders = [
    {
        id: 1,
        customerId: 101,
        customer: 'Juan Pérez',
        date: new Date('2025-09-12'),
        status: 'pending',
        items: [
            { productId: 10, name: 'Teclado', quantity: 1, price: 15000 },
            { productId: 11, name: 'Mouse', quantity: 2, price: 8000 },
        ],
    },
    {
        id: 2,
        customerId: 102,
        customer: 'María Gómez',
        date: new Date('2025-09-18'),
        status: 'shipped',
        items: [
            { productId: 20, name: 'Monitor', quantity: 1, price: 120000 },
        ],
    },
    {
        id: 3,
        customerId: 103,
        customer: 'Carlos López',
        date: new Date('2025-09-20'),
        status: 'delivered',
        items: [
            { productId: 30, name: 'Notebook', quantity: 1, price: 950000 },
        ],
    },
]

export const OrdersContext = createContext({ orders: [], addOrder: () => {} })

export const useOrders = () => useContext(OrdersContext)

export const OrdersProvider = ({ children }) => {
    const [orders, setOrders] = useState(() => {
        try {
            const raw = localStorage.getItem('orders')
            if (raw) {
                const parsed = JSON.parse(raw)
                // revive dates
                return Array.isArray(parsed) ? parsed.map(o => ({ ...o, date: new Date(o.date) })) : initialOrders
            }
        } catch {}
        return initialOrders
    })

    useEffect(() => {
        try {
            localStorage.setItem('orders', JSON.stringify(orders))
        } catch {}
    }, [orders])

    const addOrder = (order) => {
        setOrders((previousOrders) => {
            const maxExistingId = previousOrders.reduce((maxId, current) => Math.max(maxId, current.id), 0)
            const nextId = maxExistingId + 1
            return [...previousOrders, { ...order, id: nextId }]
        })
    }

    return (
        <OrdersContext.Provider value={{ orders, addOrder }}>
            {children}
        </OrdersContext.Provider>
    )
}

const Dashboard = () => {
    const { orders } = useOrders()
    const [filter, setFilter] = useState('all')

    const filtered = useMemo(() => {
        if (filter === 'all') return orders
        return orders.filter((o) => o.status === filter)
    }, [orders, filter])

    const stats = useMemo(() => {
        const counts = { total: orders.length, pending: 0, shipped: 0, delivered: 0 }
        for (const o of orders) {
            if (o.status === 'pending') counts.pending += 1
            else if (o.status === 'shipped') counts.shipped += 1
            else if (o.status === 'delivered') counts.delivered += 1
        }
        return counts
    }, [orders])

    return (
        <div className="dashboard">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                <h2>Dashboard</h2>
                <Link to="/Formulario" className="btn primary">Nuevo Pedido</Link>
            </div>
            <OrderFilter filter={filter} onChange={setFilter} />
            <OrderStats total={stats.total} pending={stats.pending} shipped={stats.shipped} delivered={stats.delivered} />
            <OrderList orders={filtered} />
        </div>
    )
}

export default Dashboard