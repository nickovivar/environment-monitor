import { TemperatureData, Statistics, MeasurementStatistics } from '../types/temperature';

const calculateSingleStatistic = (values: number[]): Statistics => {
  if (values.length === 0) {
    return { mean: 0, max: 0, min: 0 };
  }

  const mean = values.reduce((a, b) => a + b, 0) / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  return {
    mean: Number(mean.toFixed(2)),
    max: Number(max.toFixed(2)),
    min: Number(min.toFixed(2))
  };
};

export const calculateStatistics = (data: TemperatureData[]): MeasurementStatistics => {
  const temperatures = data.map(d => d.temperature);
  const humidities = data.map(d => d.humidity);

  return {
    temperature: calculateSingleStatistic(temperatures),
    humidity: calculateSingleStatistic(humidities)
  };
};