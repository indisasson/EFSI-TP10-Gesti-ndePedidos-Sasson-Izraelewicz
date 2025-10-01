import PropTypes from 'prop-types'

const currencyFormatter = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' })

const OrderItem = ({ id, customer, date, status, items }) => {
    const total = items.reduce((sum, it) => sum + it.quantity * it.price, 0)
    const formattedDate = date instanceof Date ? date.toLocaleDateString('es-AR') : new Date(date).toLocaleDateString('es-AR')

    return (
        <div className="order-item">
            <div className="order-header">
                <strong>#{id}</strong> · {customer} · {formattedDate} · <span className={`status ${status}`}>{status}</span>
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

OrderItem.propTypes = {
    id: PropTypes.number.isRequired,
    customer: (props, propName, componentName) => {
        const value = props[propName]
        if (typeof value !== 'string') return new Error(`${componentName}: customer debe ser string`)
        if (value.trim().length < 3) return new Error(`${componentName}: customer debe tener al menos 3 caracteres`)
        return null
    },
    items: PropTypes.arrayOf(
        PropTypes.exact({
            productId: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            quantity: (props, propName, componentName) => {
                const qty = props[propName]
                if (typeof qty !== 'number' || Number.isNaN(qty)) return new Error(`${componentName}: quantity debe ser number`)
                if (qty <= 0) return new Error(`${componentName}: quantity debe ser > 0`)
                return null
            },
            price: PropTypes.number.isRequired,
        })
    ).isRequired,
    status: PropTypes.oneOf(['pending', 'shipped', 'delivered']),
    date: PropTypes.instanceOf(Date),
}

OrderItem.defaultProps = {
    status: 'pending',
    date: new Date(),
}

export default OrderItem



