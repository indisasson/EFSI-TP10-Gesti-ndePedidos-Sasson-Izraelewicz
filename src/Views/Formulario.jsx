import { useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import '../Css/Dashboard.css'
import { useOrders } from './Dashboard'

const emptyOrder = {
    customerId: '',
    customer: '',
    status: 'pending',
    date: new Date(),
    items: [{ productId: '', name: '', quantity: 1, price: '' }],
}

const Formulario = ({ onSubmit }) => {
    const { addOrder } = useOrders?.() || { addOrder: undefined }
    const [order, setOrder] = useState(emptyOrder)

    const addItem = () => {
        setOrder((prev) => ({ ...prev, items: [...prev.items, { productId: '', name: '', quantity: 1, price: '' }] }))
    }

    const removeItem = (idx) => {
        setOrder((prev) => ({ ...prev, items: prev.items.filter((_, i) => i !== idx) }))
    }

    const updateItem = (idx, field, value) => {
        setOrder((prev) => ({
            ...prev,
            items: prev.items.map((it, i) => (i === idx ? { ...it, [field]: value } : it)),
        }))
    }

    const isValid = useMemo(() => {
        const customerIdNum = Number(order.customerId)
        if (!Number.isFinite(customerIdNum) || customerIdNum <= 0) return false
        if (typeof order.customer !== 'string' || order.customer.trim().length < 3) return false
        if (!['pending', 'shipped', 'delivered'].includes(order.status)) return false
        if (!(order.date instanceof Date)) return false
        if (!Array.isArray(order.items) || order.items.length === 0) return false
        for (const it of order.items) {
            const productId = Number(it.productId)
            const quantity = Number(it.quantity)
            const price = Number(it.price)
            if (!Number.isFinite(productId)) return false
            if (typeof it.name !== 'string' || it.name.trim() === '') return false
            if (!Number.isFinite(quantity) || quantity <= 0) return false
            if (!Number.isFinite(price) || price < 0) return false
        }
        return true
    }, [order])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isValid) return
        const normalized = {
            customerId: Number(order.customerId),
            customer: order.customer.trim(),
            status: order.status,
            date: order.date,
            items: order.items.map((it) => ({
                productId: Number(it.productId),
                name: it.name.trim(),
                quantity: Number(it.quantity),
                price: Number(it.price),
            })),
        }
        if (onSubmit) {
            onSubmit(normalized)
        } else if (typeof addOrder === 'function') {
            addOrder(normalized)
        }
        setOrder(emptyOrder)
    }

    return (
        <div className="formulario">
            <h2>Nuevo pedido</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID Cliente</label>
                    <input placeholder="customerId" value={order.customerId} onChange={(e) => setOrder({ ...order, customerId: e.target.value })} />
                </div>
                <div>
                    <label>Cliente</label>
                    <input value={order.customer} onChange={(e) => setOrder({ ...order, customer: e.target.value })} />
                </div>
                <div>
                    <label>Estado</label>
                    <select value={order.status} onChange={(e) => setOrder({ ...order, status: e.target.value })}>
                        <option value="pending">pending</option>
                        <option value="shipped">shipped</option>
                        <option value="delivered">delivered</option>
                    </select>
                </div>
                <div>
                    <label>Fecha</label>
                    <input type="date" value={order.date.toISOString().slice(0, 10)} onChange={(e) => setOrder({ ...order, date: new Date(e.target.value) })} />
                </div>

                <h3>Productos</h3>
                {order.items.map((it, idx) => (
                    <div key={idx} className="item-row">
                        <input placeholder="productId" value={it.productId} onChange={(e) => updateItem(idx, 'productId', e.target.value)} />
                        <input placeholder="name" value={it.name} onChange={(e) => updateItem(idx, 'name', e.target.value)} />
                        <input placeholder="quantity" type="number" min={1} value={it.quantity} onChange={(e) => updateItem(idx, 'quantity', e.target.value)} />
                        <input placeholder="price" type="number" min={0} step="0.01" value={it.price} onChange={(e) => updateItem(idx, 'price', e.target.value)} />
                        <button type="button" onClick={() => removeItem(idx)}>Quitar</button>
                    </div>
                ))}
                <button type="button" onClick={addItem}>Agregar producto</button>

                <div style={{ marginTop: 12 }}>
                    <button type="submit" disabled={!isValid}>Crear pedido</button>
                </div>
            </form>
        </div>
    )
}

Formulario.propTypes = {
    onSubmit: PropTypes.func,
}

export default Formulario


