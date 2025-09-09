import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import './HeatmapChart.module.scss'

const HeatmapChart = ({ data }) => {
  const getColor = (value) => {
    if (value > 80) return '#0d652d'
    if (value > 60) return '#1e8e3e'
    if (value > 40) return '#34a853'
    if (value > 20) return '#fbbc04'
    return '#ea4335'
  }

  return (
    <div className="heatmap-chart">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 100, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis type="number" tick={{ fill: '#5f6368' }} axisLine={false} />
          <YAxis 
            type="category" 
            dataKey="estado" 
            tick={{ fill: '#5f6368' }}
            axisLine={false}
            width={80}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: 'white',
              border: '1px solid #e8eaed',
              borderRadius: '8px',
              boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
            }}
          />
          <Bar dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={getColor(entry.value)} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default HeatmapChart