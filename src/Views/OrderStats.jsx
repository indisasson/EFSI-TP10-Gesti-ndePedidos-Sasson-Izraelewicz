import PropTypes from 'prop-types'

const OrderStats = ({ total, pending, shipped, delivered }) => {
    return (
        <div className="order-stats">
            <div>Total: {total}</div>
            <div>pending: {pending}</div>
            <div>shipped: {shipped}</div>
            <div>delivered: {delivered}</div>
        </div>
    )
}

OrderStats.propTypes = {
    total: PropTypes.number.isRequired,
    pending: PropTypes.number.isRequired,
    shipped: PropTypes.number.isRequired,
    delivered: PropTypes.number.isRequired,
}

export default OrderStats



