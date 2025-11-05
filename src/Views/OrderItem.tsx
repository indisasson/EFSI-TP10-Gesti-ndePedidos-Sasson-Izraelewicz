import type { Order, OrderProductItem, OrderStatus } from '../types'

const currencyFormatter = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' })

type Props = Pick<Order, 'id' | 'customerId' | 'customer' | 'date' | 'status' | 'items'>

const OrderItem = ({ id, customerId, customer, date, status = 'pending', items }: Props) => {
    const total = items.reduce((sum, it) => sum + it.quantity * it.price, 0)
    const formattedDate = date instanceof Date ? date.toLocaleDateString('es-AR') : new Date(date).toLocaleDateString('es-AR')

    return (
        <div className="order-item">
            <div className="order-header">
             · Cliente {customerId} · {customer} · {formattedDate} · <span className={`status ${status}`}>{status}</span>
            </div>
            <ul className="order-products">
                {items.map((p) => (
                    <li key={p.productId} className="order-product">
                        <span className="name">{p.name}</span>
                        <span className="qty">x{p.quantity}</span>
                        <span className="price">{currencyFormatter.format(p.price)}</span>
                        <span className="subtotal">{currencyFormatter.format(p.quantity * p.price)}</span>
                    </li>
                ))}
            </ul>
            <div className="order-total">Total: {currencyFormatter.format(total)}</div>
        </div>
    )
}

export default OrderItem


