import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import './TimeSeriesChart.module.scss'

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`Data: ${label}`}</p>
        <p className="value">{`Valor: ${payload[0].value}`}</p>
      </div>
    )
  }
  return null
}

const TimeSeriesChart = ({ data }) => {
  return (
    <div className="time-series-chart">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis 
            dataKey="date" 
            tick={{ fill: '#5f6368', fontSize: 12 }}
            axisLine={false}
          />
          <YAxis 
            tick={{ fill: '#5f6368', fontSize: 12 }}
            axisLine={false}
            domain={[0, 100]}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#1a73e8" 
            strokeWidth={3}
            dot={{ fill: '#1a73e8', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, fill: '#1a73e8' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default TimeSeriesChart