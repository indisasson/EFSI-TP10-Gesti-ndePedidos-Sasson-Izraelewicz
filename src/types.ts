export type OrderStatus = 'pending' | 'shipped' | 'delivered'

export interface OrderProductItem {
    productId: number
    name: string
    quantity: number
    price: number
}

export interface Order {
    id: number
    customerId: number
    customer: string
    date: Date
    status: OrderStatus
    items: OrderProductItem[]
}

export interface NewOrderInput {
    customerId: number
    customer: string
    date: Date
    status: OrderStatus
    items: OrderProductItem[]
}


