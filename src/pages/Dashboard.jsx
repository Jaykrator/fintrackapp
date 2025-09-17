import { BarChart3, CreditCard, Target, Menu } from 'lucide-react';
import { useState } from 'react';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Top Navbar */}
      <nav className='fixed top-0 left-0 w-full bg-teal-600 text-white flex justify-between items-center p-4 z-10'>
        <h2 className='text-xl font-bold'>FinTrack</h2>
        <div className='hidden md:flex space-x-6'>
          <a
            href='/dashboard'
            className='hover:text-indigo-300 flex items-center gap-2'
          >
            <BarChart3 className='w-5 h-5' /> Dashboard
          </a>
          <a
            href='/transactions'
            className='hover:text-indigo-300 flex items-center gap-2'
          >
            <CreditCard className='w-5 h-5' /> Transactions
          </a>
          <a
            href='/goals'
            className='hover:text-indigo-300 flex items-center gap-2'
          >
            <Target className='w-5 h-5' /> Goals
          </a>
        </div>
        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
          <Menu className='w-6 h-6' />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='absolute top-14 left-0 w-full bg-teal-700 text-white p-4 space-y-3 md:hidden z-20'>
          <a href='/dashboard' className='block hover:text-indigo-300'>
            Dashboard
          </a>
          <a href='/transactions' className='block hover:text-indigo-300'>
            Transactions
          </a>
          <a href='/goals' className='block hover:text-indigo-300'>
            Goals
          </a>
        </div>
      )}

      {/* Main Content */}
      <main className='p-8 mt-16'>
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
      </main>
    </div>
  );
}
