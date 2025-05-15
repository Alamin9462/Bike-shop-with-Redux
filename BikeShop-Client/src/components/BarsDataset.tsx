import { BarChart } from '@mui/x-charts/BarChart';

const chartSettings = {
  yAxis: [
    {
      label: 'Value',
      width: 60,
    },
  ],
  height: 300,
  barGap: 8, // Adds space between the bars for each category
  barCategoryGap: 20, // Space between categories
};

// Combined Dataset (User Registrations, Revenue, and Orders)
const combinedDataset = [
  { month: 'Jan', registrations: 40, revenue: 12000, orders: 50 },
  { month: 'Feb', registrations: 55, revenue: 15000, orders: 65 },
  { month: 'Mar', registrations: 70, revenue: 18000, orders: 80 },
  { month: 'Apr', registrations: 85, revenue: 21000, orders: 90 },
  { month: 'May', registrations: 90, revenue: 25000, orders: 100 },
];

// Value formatter for all charts
const valueFormatter = (value: number | null) => {
  if (value === null) return 'N/A';
  return value.toLocaleString();
};

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto p-6">
      <h2>Dashboard Metrics (Registrations, Revenue, Orders)</h2>
      <BarChart
        dataset={combinedDataset}
        xAxis={[{ dataKey: 'month', label: 'Month' }]}
        series={[
          {
            dataKey: 'registrations',
            label: 'User Registrations',
            valueFormatter,
            color: 'blue', // Customize colors for each metric
          },
          {
            dataKey: 'revenue',
            label: 'Revenue',
            valueFormatter,
            color: 'green', // Green color for Revenue
          },
          {
            dataKey: 'orders',
            label: 'Orders',
            valueFormatter,
            color: 'orange', // Orange color for Orders
          },
        ]}
        {...chartSettings}
      />
    </div>
  );
}
