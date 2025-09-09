import { useState, useEffect } from 'react'
import { generateTimeSeriesData, generateHeatmapData } from '../utils/generateMockData'

export const useChartData = (dateRange) => {
  const [timeSeriesData, setTimeSeriesData] = useState([])
  const [heatmapData, setHeatmapData] = useState([])

  useEffect(() => {
    const timeSeries = generateTimeSeriesData(dateRange)
    const heatmap = generateHeatmapData()
    
    setTimeSeriesData(timeSeries)
    setHeatmapData(heatmap)
  }, [dateRange])

  return { timeSeriesData, heatmapData }
}