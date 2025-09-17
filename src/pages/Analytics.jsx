// Import React + Recharts components
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Analytics() {
  // Dummy transaction data for line/bar charts
  const data = [
    { month: 'Jan', income: 120000, expenses: 60000 },
    { month: 'Feb', income: 100000, expenses: 80000 },
    { month: 'Mar', income: 150000, expenses: 70000 },
    { month: 'Apr', income: 130000, expenses: 90000 },
    { month: 'May', income: 180000, expenses: 95000 },
    { month: 'Jun', income: 160000, expenses: 110000 },
  ];

  // Dummy spending breakdown for pie chart
  const categories = [
    { name: 'Food', value: 40000 },
    { name: 'Rent', value: 60000 },
    { name: 'Transport', value: 20000 },
    { name: 'Entertainment', value: 15000 },
    { name: 'Others', value: 10000 },
  ];

  // Pie chart colors
  const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#EF4444', '#8B5CF6'];

  return (
    <div className='p-6 bg-gray-50 min-h-screen'>
      <h1 className='text-3xl font-bold text-emerald-700 mb-6'>Analytics</h1>

      {/* Summary Cards */}
      <div className='grid md:grid-cols-3 gap-6 mb-8'>
        <div className='bg-white p-6 rounded-lg shadow text-center'>
          <h2 className='text-lg font-semibold text-gray-600'>Total Income</h2>
          <p className='text-2xl font-bold text-emerald-600'>₦840,000</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow text-center'>
          <h2 className='text-lg font-semibold text-gray-600'>
            Total Expenses
          </h2>
          <p className='text-2xl font-bold text-red-500'>₦505,000</p>
        </div>
        <div className='bg-white p-6 rounded-lg shadow text-center'>
          <h2 className='text-lg font-semibold text-gray-600'>Savings</h2>
          <p className='text-2xl font-bold text-blue-500'>₦335,000</p>
        </div>
      </div>

      {/* Line Chart Section */}
      <div className='bg-white rounded-lg shadow-md p-4 mb-8'>
        <h2 className='text-xl font-semibold mb-4'>
          Income vs Expenses (Line)
        </h2>
        <ResponsiveContainer width='100%' height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='3 3' /> {/* Grid lines */}
            <XAxis dataKey='month' /> {/* X-axis months */}
            <YAxis /> {/* Y-axis values */}
            <Tooltip /> {/* Hover popup */}
            <Legend /> {/* Labels */}
            <Line
              type='monotone'
              dataKey='income'
              stroke='#10B981'
              strokeWidth={3}
            />
            <Line
              type='monotone'
              dataKey='expenses'
              stroke='#EF4444'
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart Section */}
      <div className='bg-white rounded-lg shadow-md p-4 mb-8'>
        <h2 className='text-xl font-semibold mb-4'>Income vs Expenses (Bar)</h2>
        <ResponsiveContainer width='100%' height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='month' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='income' fill='#10B981' barSize={40} />
            <Bar dataKey='expenses' fill='#EF4444' barSize={40} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart Section */}
      <div className='bg-white rounded-lg shadow-md p-4'>
        <h2 className='text-xl font-semibold mb-4'>Spending Breakdown</h2>
        <ResponsiveContainer width='100%' height={300}>
          <PieChart>
            <Pie
              data={categories}
              cx='50%'
              cy='50%'
              outerRadius={100}
              dataKey='value'
              label
            >
              {categories.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
