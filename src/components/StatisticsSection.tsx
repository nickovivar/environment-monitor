import React from 'react';
import { Thermometer, Droplets, Gauge } from 'lucide-react';
import { StatCard } from './StatCard';
import { MeasurementStatistics } from '../types/temperature';

interface StatisticsSectionProps {
  stats: MeasurementStatistics;
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({ stats }) => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Temperature Statistics</h2>
        <div className="grid grid-cols-3 gap-4">
          <StatCard
            title="Average"
            value={stats.temperature.mean}
            unit="°C"
            icon={<Thermometer size={24} className="text-red-500" />}
          />
          <StatCard
            title="Maximum"
            value={stats.temperature.max}
            unit="°C"
            icon={<Gauge size={24} className="text-red-500" />}
          />
          <StatCard
            title="Minimum"
            value={stats.temperature.min}
            unit="°C"
            icon={<Thermometer size={24} className="text-red-500" />}
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Humidity Statistics</h2>
        <div className="grid grid-cols-3 gap-4">
          <StatCard
            title="Average"
            value={stats.humidity.mean}
            unit="%"
            icon={<Droplets size={24} className="text-blue-500" />}
          />
          <StatCard
            title="Maximum"
            value={stats.humidity.max}
            unit="%"
            icon={<Droplets size={24} className="text-blue-500" />}
          />
          <StatCard
            title="Minimum"
            value={stats.humidity.min}
            unit="%"
            icon={<Droplets size={24} className="text-blue-500" />}
          />
        </div>
      </div>
    </div>
  );
};