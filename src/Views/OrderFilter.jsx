import PropTypes from 'prop-types'

const OrderFilter = ({ filter, onChange }) => {
    return (
        <div className="order-filter">
            <label htmlFor="statusFilter">Filtrar por estado: </label>
            <select id="statusFilter" value={filter} onChange={(e) => onChange(e.target.value)}>
                <option value="pending">pending</option>
                <option value="shipped">shipped</option>
                <option value="delivered">delivered</option>
            </select>
        </div>
    )
}

OrderFilter.propTypes = {
    filter: PropTypes.oneOf(['pending', 'shipped', 'delivered']).isRequired,
    onChange: PropTypes.func.isRequired,
}

export default OrderFilter


