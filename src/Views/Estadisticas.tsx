import { useMemo } from 'react'
import { useOrders } from './Dashboard'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const COLORS = ['#f59e0b', '#3b82f6', '#22c55e']

const Estadisticas = () => {
    const { orders } = useOrders()

    const data = useMemo(() => {
        const counts = { pending: 0, shipped: 0, delivered: 0 }
        for (const o of orders) counts[o.status] += 1 as any
        return [
            { name: 'pending', value: counts.pending },
            { name: 'shipped', value: counts.shipped },
            { name: 'delivered', value: counts.delivered },
        ]
    }, [orders])

    return (
        <div>
            <h2>Estadísticas</h2>
            <div style={{ width: '100%', height: 320 }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Pie data={data} dataKey="value" nameKey="name" label outerRadius={110}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Estadisticas


