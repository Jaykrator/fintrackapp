// src/pages/Dashboard.jsx
export default function Dashboard() {
  return (
    <div className='p-6 bg-gray-50 min-h-screen'>
      {/* Page Title */}
      <h1 className='text-3xl font-bold text-gray-800 mb-6'>
        Dashboard Overview
      </h1>

      {/* Stats Section */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
        <div className='bg-white shadow rounded-lg p-6'>
          <h2 className='text-sm text-gray-500'>Total Balance</h2>
          <p className='text-2xl font-bold text-indigo-600'>₦250,000</p>
        </div>
        <div className='bg-white shadow rounded-lg p-6'>
          <h2 className='text-sm text-gray-500'>Monthly Expenses</h2>
          <p className='text-2xl font-bold text-red-500'>₦120,000</p>
        </div>
        <div className='bg-white shadow rounded-lg p-6'>
          <h2 className='text-sm text-gray-500'>Savings Goals</h2>
          <p className='text-2xl font-bold text-green-500'>₦80,000</p>
        </div>
      </div>

      {/* Placeholder for Charts */}
      <div className='mt-8 bg-white shadow rounded-lg p-6'>
        <h2 className='text-lg font-semibold mb-4'>Spending Analytics</h2>
        <div className='h-48 flex items-center justify-center text-gray-400'>
          📊 Chart will go here
        </div>
      </div>
    </div>
  );
}
