import { useMemo, useState } from 'react'
import OrderFilter from './OrderFilter'
import OrderList from './OrderList'
import OrderStats from './OrderStats'
import '../Css/Dashboard.css'
import Formulario from './Formulario'

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

const Dashboard = () => {
    const [orders, setOrders] = useState(initialOrders)
    const [filter, setFilter] = useState('pending')

    const filtered = useMemo(() => {
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
            <h2>Dashboard</h2>
            <OrderFilter filter={filter} onChange={setFilter} />
            <OrderStats total={stats.total} pending={stats.pending} shipped={stats.shipped} delivered={stats.delivered} />
            <OrderList orders={filtered} />
            <div style={{ marginTop: 24 }}>
                <Formulario onSubmit={(order) => {
                    setOrders((previousOrders) => {
                        const maxExistingId = previousOrders.reduce((maxId, current) => Math.max(maxId, current.id), 0)
                        const nextId = maxExistingId + 1
                        return [...previousOrders, { ...order, id: nextId }]
                    })
                }} />
            </div>
        </div>
    )
}

export default Dashboard