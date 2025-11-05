type Props = {
    filter: 'all' | 'pending' | 'shipped' | 'delivered'
    onChange: (value: 'all' | 'pending' | 'shipped' | 'delivered') => void
}

const OrderFilter = ({ filter, onChange }: Props) => {
    return (
        <div className="order-filter">
            <label htmlFor="statusFilter">Filtrar por estado: </label>
            <select id="statusFilter" value={filter} onChange={(e) => onChange(e.target.value as Props['filter'])}>
                <option value="all">todos</option>
                <option value="pending">pending</option>
                <option value="shipped">shipped</option>
                <option value="delivered">delivered</option>
            </select>
        </div>
    )
}

export default OrderFilter


