import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { TemperatureData } from '../types/temperature';

export const useTemperatureData = () => {
  const [data, setData] = useState<TemperatureData[]>([]);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      const response = await fetch('/data.csv');
      const csvText = await response.text();
      
      Papa.parse(csvText, {
        header: true,
        complete: (results) => {
          const parsedData: TemperatureData[] = results.data
            .filter((row: any) => row.Timestamp && row.Temperature)
            .map((row: any) => ({
              timestamp: new Date(row.Timestamp),
              temperature: parseFloat(row.Temperature),
              pressure: parseFloat(row.Pressure),
              humidity: parseFloat(row.Humidity),
            }));
          setData(parsedData);
        },
        error: (error) => {
          setError(error.message);
        },
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 60000); // Fetch every minute
    return () => clearInterval(interval);
  }, []);

  return { data, error };
};