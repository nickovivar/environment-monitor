export interface TemperatureData {
  timestamp: Date;
  temperature: number;
  pressure: number;
  humidity: number;
}

export interface Statistics {
  mean: number;
  max: number;
  min: number;
}

export interface MeasurementStatistics {
  temperature: Statistics;
  humidity: Statistics;
}