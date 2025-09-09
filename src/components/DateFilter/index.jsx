import { Group, Button, Box, Text } from '@mantine/core';
import classes from './DateFilter.module.scss';

const DateFilter = ({ selectedRange, onRangeChange }) => {
  const options = [
    { value: '1d', label: '24 horas' },
    { value: '7d', label: '7 dias' },
    { value: '30d', label: '30 dias' }
  ]

  return (
    <Box className={classes['date-filter']}>
      <Text className={classes['filter-label']}>Período:</Text>
      <Group className={classes['filter-buttons']} gap={0}>
        {options.map(option => (
          <Button
            key={option.value}
            variant={selectedRange === option.value ? 'filled' : 'default'}
            className={`${classes['filter-button']} ${selectedRange === option.value ? classes.active : ''}`}
            onClick={() => onRangeChange(option.value)}
            size="sm"
            radius="xl"
          >
            {option.label}
          </Button>
        ))}
      </Group>
    </Box>
  )
}

export default DateFilter