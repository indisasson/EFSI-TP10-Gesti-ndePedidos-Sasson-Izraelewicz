import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis, ResponsiveContainer, Cell } from 'recharts'

type Props = { total: number; pending: number; shipped: number; delivered: number }

const OrderStats = ({ total, pending, shipped, delivered }: Props) => {
    const data = [
        { name: 'pending', value: pending },
        { name: 'shipped', value: shipped },
        { name: 'delivered', value: delivered },
    ]
    const COLORS = ['#f59e0b', '#3b82f6', '#22c55e']

    return (
        <div className="order-stats">
            <div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
                <div>Total: {total}</div>
                <div>pending: {pending}</div>
                <div>shipped: {shipped}</div>
                <div>delivered: {delivered}</div>
            </div>
            <div style={{ width: '100%', height: 260, marginLeft: 100 }}>
                <ResponsiveContainer>
                    <BarChart data={data} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis allowDecimals={false} />
                        <Tooltip />
                        <Bar dataKey="value" radius={[4,4,0,0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default OrderStats


