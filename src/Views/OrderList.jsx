import PropTypes from 'prop-types'
import OrderItem from './OrderItem'

const OrderList = ({ orders }) => {
    if (!orders || orders.length === 0) {
        return <div>No hay pedidos.</div>
    }

    return (
        <div className="order-list">
            {orders.map((o) => (
                <OrderItem key={o.id} {...o} />
            ))}
        </div>
    )
}

OrderList.propTypes = {
    orders: PropTypes.arrayOf(
        PropTypes.exact({
            id: PropTypes.number.isRequired,
            customer: PropTypes.string.isRequired,
            items: PropTypes.array.isRequired,
            status: PropTypes.oneOf(['pending', 'shipped', 'delivered']),
            date: PropTypes.instanceOf(Date),
        })
    ).isRequired,
}

export default OrderList



