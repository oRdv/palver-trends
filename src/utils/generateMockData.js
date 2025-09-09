import { subDays, subHours, format } from 'date-fns'

export const generateTimeSeriesData = (range) => {
  let dataPoints = []
  let formatPattern = 'dd/MM'
  
  switch (range) {
    case '1d':
      dataPoints = Array.from({ length: 24 }, (_, i) => {
        const date = subHours(new Date(), 23 - i)
        return {
          date: format(date, 'HH:00'),
          value: Math.floor(Math.random() * 100) + 1,
          fullDate: format(date, 'yyyy-MM-dd HH:00')
        }
      })
      break
      
    case '7d':
      dataPoints = Array.from({ length: 7 }, (_, i) => {
        const date = subDays(new Date(), 6 - i)
        return {
          date: format(date, 'dd/MM'),
          value: Math.floor(Math.random() * 100) + 1,
          fullDate: format(date, 'yyyy-MM-dd')
        }
      })
      break
      
    case '30d':
      dataPoints = Array.from({ length: 30 }, (_, i) => {
        const date = subDays(new Date(), 29 - i)
        return {
          date: format(date, 'dd/MM'),
          value: Math.floor(Math.random() * 100) + 1,
          fullDate: format(date, 'yyyy-MM-dd')
        }
      })
      break
      
    default:
      dataPoints = Array.from({ length: 7 }, (_, i) => {
        const date = subDays(new Date(), 6 - i)
        return {
          date: format(date, 'dd/MM'),
          value: Math.floor(Math.random() * 100) + 1,
          fullDate: format(date, 'yyyy-MM-dd')
        }
      })
  }

  return dataPoints
}

export const generateHeatmapData = () => {
  const estados = [
    'São Paulo', 'Rio de Janeiro', 'Minas Gerais', 'Rio Grande do Sul',
    'Santa Catarina', 'Paraná', 'Bahia', 'Pernambuco', 'Ceará', 'Goiás',
    'Pará', 'Amazonas', 'Espírito Santo', 'Maranhão', 'Mato Grosso',
    'Mato Grosso do Sul', 'Paraíba', 'Rio Grande do Norte', 'Sergipe', 'Tocantins'
  ]
  
  return estados.map(estado => ({
    estado,
    value: Math.floor(Math.random() * 100) + 1
  })).sort((a, b) => b.value - a.value)
}