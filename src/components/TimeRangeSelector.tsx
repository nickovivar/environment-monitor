import React from 'react';

interface TimeRangeSelectorProps {
  onRangeChange: (range: string) => void;
  selectedRange: string;
}

export const TimeRangeSelector: React.FC<TimeRangeSelectorProps> = ({
  onRangeChange,
  selectedRange,
}) => {
  const ranges = [
    { label: 'Last Hour', value: '1h' },
    { label: 'Last 6 Hours', value: '6h' },
    { label: 'Last 24 Hours', value: '24h' },
    { label: 'All', value: 'all' },
  ];

  return (
    <div className="flex gap-2">
      {ranges.map(({ label, value }) => (
        <button
          key={value}
          onClick={() => onRangeChange(value)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors
            ${
              selectedRange === value
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};