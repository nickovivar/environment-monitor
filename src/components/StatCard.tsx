import React from 'react';

interface StatCardProps {
  title: string;
  value: number;
  unit: string;
  icon?: React.ReactNode;
}

export const StatCard: React.FC<StatCardProps> = ({ title, value, unit, icon }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-xl font-semibold">{value}{unit}</p>
        </div>
        <div>{icon}</div>
      </div>
    </div>
  );
};