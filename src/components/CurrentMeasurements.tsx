import React from 'react';
import { Thermometer, Droplets, Gauge } from 'lucide-react';
import { TemperatureData } from '../types/temperature';

interface CurrentMeasurementsProps {
  data: TemperatureData[];
}

export const CurrentMeasurements: React.FC<CurrentMeasurementsProps> = ({ data }) => {
  const current = data[data.length - 1] || {
    temperature: 0,
    humidity: 0,
    pressure: 0,
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Current Readings</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex items-center space-x-3">
          <Thermometer className="text-red-500" size={24} />
          <div>
            <p className="text-sm text-gray-500">Temperature</p>
            <p className="text-2xl font-bold">{current.temperature.toFixed(1)}°C</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Droplets className="text-blue-500" size={24} />
          <div>
            <p className="text-sm text-gray-500">Humidity</p>
            <p className="text-2xl font-bold">{current.humidity.toFixed(1)}%</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Gauge className="text-purple-500" size={24} />
          <div>
            <p className="text-sm text-gray-500">Pressure</p>
            <p className="text-2xl font-bold">{current.pressure.toFixed(1)} hPa</p>
          </div>
        </div>
      </div>
    </div>
  );
};