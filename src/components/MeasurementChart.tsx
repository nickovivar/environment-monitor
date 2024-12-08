import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { format } from 'date-fns';
import { TemperatureData } from '../types/temperature';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

interface MeasurementChartProps {
  data: TemperatureData[];
}

export const MeasurementChart: React.FC<MeasurementChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(d => format(d.timestamp, 'HH:mm:ss')),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(d => d.temperature),
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.5)',
        tension: 0.3,
        yAxisID: 'y-temperature',
      },
      {
        label: 'Humidity (%)',
        data: data.map(d => d.humidity),
        borderColor: 'rgb(16, 185, 129)',
        backgroundColor: 'rgba(16, 185, 129, 0.5)',
        tension: 0.3,
        yAxisID: 'y-humidity',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            const label = context.dataset.label || '';
            const value = context.parsed.y;
            return `${label}: ${value}`;
          },
        },
      },
    },
    scales: {
      'y-temperature': {
        type: 'linear' as const,
        position: 'left' as const,
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
      },
      'y-humidity': {
        type: 'linear' as const,
        position: 'right' as const,
        title: {
          display: true,
          text: 'Humidity (%)',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
      x: {
        title: {
          display: true,
          text: 'Time',
        },
      },
    },
  };

  return (
    <div className="w-full h-[400px]">
      <Line data={chartData} options={options} />
    </div>
  );
};