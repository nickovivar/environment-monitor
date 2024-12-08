# Environmental Monitoring Dashboard

A real-time dashboard for monitoring environmental data (temperature, humidity, and pressure) from a CSV data source. Built with React, TypeScript, and Chart.js.

## Features

- Real-time data visualization using Chart.js
- Current measurements display
- Statistical analysis (mean, max, min) for temperature and humidity
- Time range filtering options
- Responsive design for all screen sizes
- Automatic data refresh every minute

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd environmental-monitoring-dashboard
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the development server:
```bash
npm run dev
```

2. The application will be available at `http://localhost:5173`

## Data Format

The application expects a CSV file named `data.csv` in the `public` directory with the following format:

```csv
Timestamp,Temperature,Pressure,Humidity
2024-11-20 16:52:02,20.68,731.58,62.31
```

The CSV file should have the following columns:
- `Timestamp`: Date and time in ISO format (YYYY-MM-DD HH:mm:ss)
- `Temperature`: Temperature value in Celsius
- `Pressure`: Atmospheric pressure in hPa
- `Humidity`: Relative humidity in percentage

## Project Structure

```
src/
├── components/           # React components
│   ├── CurrentMeasurements.tsx
│   ├── MeasurementChart.tsx
│   ├── StatCard.tsx
│   ├── StatisticsSection.tsx
│   └── TimeRangeSelector.tsx
├── hooks/               # Custom React hooks
│   └── useTemperatureData.ts
├── types/               # TypeScript type definitions
│   └── temperature.ts
├── utils/               # Utility functions
│   └── dataUtils.ts
├── App.tsx             # Main application component
└── main.tsx            # Application entry point
```

## Building for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Technologies Used

- React
- TypeScript
- Chart.js
- React Chart.js 2
- Tailwind CSS
- date-fns
- Papa Parse (CSV parsing)
- Lucide React (icons)

## Development

- The application automatically refreshes data every minute
- Time range filtering options: 1 hour, 6 hours, 24 hours, or all data
- Responsive design works on both desktop and mobile devices
- Uses Tailwind CSS for styling
- TypeScript for type safety

## License

MIT