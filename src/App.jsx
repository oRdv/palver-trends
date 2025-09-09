import { useState } from 'react'
import TimeSeriesChart from './components/TimeSeriesChart'
import HeatmapChart from './components/HeatmapChart'
import DateFilter from './components/DateFilter'
import { useChartData } from './hooks/useChartData'
import './App.scss'

function App() {
  const [dateRange, setDateRange] = useState('7d')
  const { timeSeriesData, heatmapData } = useChartData(dateRange)

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Palver Trends</h1>
          <div className="search-box">
            <input 
              type="text" 
              placeholder="Comparar termos" 
              className="search-input"
            />
            <button className="search-button">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14H14.71L14.43 13.73C15.41 12.59 16 11.11 16 9.5C16 5.91 13.09 3 9.5 3C5.91 3 3 5.91 3 9.5C3 13.09 5.91 16 9.5 16C11.11 16 12.59 15.41 13.73 14.43L14 14.71V15.5L19 20.49L20.49 19L15.5 14ZM9.5 14C7.01 14 5 11.99 5 9.5C5 7.01 7.01 5 9.5 5C11.99 5 14 7.01 14 9.5C14 11.99 11.99 14 9.5 14Z" fill="#5f6368"/>
              </svg>
            </button>
          </div>
        </div>
        <nav className="header-nav">
          <a href="#" className="nav-item active">Explorar</a>
        </nav>
      </header>
      
      <main className="app-main">
        <div className="container">
          <div className="chart-controls">
            <div className="control-group">
              <span className="control-label">Brasil</span>
              <button className="control-button">
                <span>Todo o período</span>
              </button>
            </div>
            <DateFilter selectedRange={dateRange} onRangeChange={setDateRange} />
          </div>
          
          <div className="chart-card">
            <h2 className="chart-title">Interesse ao longo do tempo</h2>
            <div className="chart-subtitle">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" fill="#5f6368"/>
              </svg>
              <span>As classificações correspondem ao interesse de pesquisa</span>
            </div>
            <TimeSeriesChart data={timeSeriesData} />
          </div>
          
          <div className="chart-card">
            <h2 className="chart-title">Interesse por sub-região</h2>
            <HeatmapChart data={heatmapData} />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App