// src/pages/Transactions.jsx
import { useState } from 'react';

export default function Transactions() {
  const allTransactions = [
    { id: 1, date: '2025-09-10', description: 'Groceries', amount: -5000 },
    { id: 2, date: '2025-09-12', description: 'Salary', amount: 150000 },
    {
      id: 3,
      date: '2025-09-14',
      description: 'Electricity Bill',
      amount: -12000,
    },
    {
      id: 4,
      date: '2025-09-15',
      description: 'Freelance Project',
      amount: 80000,
    },
  ];

  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');

  // Filtering logic
  const filteredTransactions = allTransactions.filter((txn) => {
    const matchesSearch = txn.description
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === 'All'
        ? true
        : filter === 'Income'
        ? txn.amount > 0
        : txn.amount < 0;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className='p-6 bg-gray-50 min-h-screen'>
      <h1 className='text-3xl font-bold text-emerald-700 mb-6'>Transactions</h1>

      {/* Search + Filter Controls */}
      <div className='flex flex-col sm:flex-row gap-4 mb-6'>
        <input
          type='text'
          placeholder='Search by description...'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='px-4 py-2 border rounded-lg w-full sm:w-1/2 focus:ring-2 focus:ring-emerald-500'
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='px-4 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500'
        >
          <option value='All'>All</option>
          <option value='Income'>Income</option>
          <option value='Expenses'>Expenses</option>
        </select>
      </div>

      {/* Desktop Table */}
      <div className='hidden md:block overflow-x-auto bg-white rounded-lg shadow-md'>
        <table className='min-w-full text-left'>
          <thead className='bg-emerald-600 text-white'>
            <tr>
              <th className='px-6 py-3'>Date</th>
              <th className='px-6 py-3'>Description</th>
              <th className='px-6 py-3'>Amount</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.length > 0 ? (
              filteredTransactions.map((txn) => (
                <tr
                  key={txn.id}
                  className='border-b hover:bg-gray-100 transition'
                >
                  <td className='px-6 py-3'>{txn.date}</td>
                  <td className='px-6 py-3'>{txn.description}</td>
                  <td
                    className={`px-6 py-3 font-semibold ${
                      txn.amount < 0 ? 'text-red-500' : 'text-emerald-600'
                    }`}
                  >
                    {txn.amount < 0
                      ? `₦${Math.abs(txn.amount)}`
                      : `+₦${txn.amount}`}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan='3' className='px-6 py-4 text-center text-gray-500'>
                  No transactions found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className='md:hidden space-y-4'>
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((txn) => (
            <div
              key={txn.id}
              className='bg-white shadow rounded-lg p-4 border-l-4 
              hover:shadow-md transition 
              border-emerald-500'
            >
              <p className='text-sm text-gray-500'>{txn.date}</p>
              <p className='font-semibold text-gray-800'>{txn.description}</p>
              <p
                className={`text-lg font-bold ${
                  txn.amount < 0 ? 'text-red-500' : 'text-emerald-600'
                }`}
              >
                {txn.amount < 0
                  ? `₦${Math.abs(txn.amount)}`
                  : `+₦${txn.amount}`}
              </p>
            </div>
          ))
        ) : (
          <p className='text-center text-gray-500'>No transactions found</p>
        )}
      </div>
    </div>
  );
}
