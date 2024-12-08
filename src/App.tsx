import React, { useState, useMemo } from 'react';
import { CurrentMeasurements } from './components/CurrentMeasurements';
import { StatisticsSection } from './components/StatisticsSection';
import { MeasurementChart } from './components/MeasurementChart';
import { TimeRangeSelector } from './components/TimeRangeSelector';
import { useTemperatureData } from './hooks/useTemperatureData';
import { calculateStatistics } from './utils/dataUtils';
import { subHours } from 'date-fns';

function App() {
  const [timeRange, setTimeRange] = useState('1h');
  const { data, error } = useTemperatureData();

  const filteredData = useMemo(() => {
    if (timeRange === 'all') return data;
    
    const hours = parseInt(timeRange);
    const cutoff = subHours(new Date(), hours);
    return data.filter(d => d.timestamp >= cutoff);
  }, [data, timeRange]);

  const stats = useMemo(() => calculateStatistics(filteredData), [filteredData]);

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Error: {error}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">
          Environmental Monitoring Dashboard
        </h1>

        <div className="space-y-6">
          <CurrentMeasurements data={data} />
          
          <StatisticsSection stats={stats} />

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="mb-6">
              <TimeRangeSelector
                onRangeChange={setTimeRange}
                selectedRange={timeRange}
              />
            </div>
            <MeasurementChart data={filteredData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;