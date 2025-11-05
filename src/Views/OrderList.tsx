import OrderItem from './OrderItem'
import type { Order } from '../types'

type Props = { orders: Order[] }

const OrderList = ({ orders }: Props) => {
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

export default OrderList


