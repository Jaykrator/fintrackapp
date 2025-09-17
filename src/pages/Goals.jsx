// src/pages/Goals.jsx
import { useState } from 'react';
import { Target, PlusCircle } from 'lucide-react';

export default function Goals() {
  const [goals, setGoals] = useState([
    { title: 'Emergency Fund', target: 200000, saved: 80000 },
    { title: 'New Laptop', target: 400000, saved: 150000 },
  ]);

  const [formData, setFormData] = useState({ title: '', target: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.target) return;
    setGoals([
      ...goals,
      { title: formData.title, target: +formData.target, saved: 0 },
    ]);
    setFormData({ title: '', target: '' });
  };

  return (
    <div className='p-4 sm:p-6 bg-gray-50 min-h-screen'>
      <h1 className='text-2xl sm:text-3xl font-bold text-teal-700 mb-6 flex items-center gap-2'>
        <Target className='w-7 h-7 sm:w-8 sm:h-8' /> Goals
      </h1>

      {/* Add Goal Form */}
      <form
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg p-4 sm:p-6 max-w-md mb-8 space-y-4 border border-gray-200'
      >
        <h2 className='text-lg font-semibold'>Add a New Goal</h2>
        <div>
          <label className='block text-sm font-medium mb-1'>Goal Title</label>
          <input
            type='text'
            name='title'
            value={formData.title}
            onChange={handleChange}
            className='w-full border rounded-md p-2 focus:ring-2 focus:ring-teal-500 outline-none'
            placeholder='E.g. Buy a Car'
          />
        </div>
        <div>
          <label className='block text-sm font-medium mb-1'>
            Target Amount (₦)
          </label>
          <input
            type='number'
            name='target'
            value={formData.target}
            onChange={handleChange}
            className='w-full border rounded-md p-2 focus:ring-2 focus:ring-teal-500 outline-none'
            placeholder='500000'
          />
        </div>
        <button
          type='submit'
          className='w-full flex items-center justify-center gap-2 bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition'
        >
          <PlusCircle className='w-5 h-5' /> Add Goal
        </button>
      </form>

      {/* Goals List */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {goals.length === 0 ? (
          <p className='text-gray-500'>No goals yet. Start by adding one!</p>
        ) : (
          goals.map((goal, i) => {
            const progress = (goal.saved / goal.target) * 100;
            return (
              <div
                key={i}
                className='bg-white shadow-md rounded-lg p-4 sm:p-6 border border-gray-200'
              >
                <h3 className='text-lg font-semibold'>{goal.title}</h3>
                <p className='text-gray-600 mb-2'>
                  ₦{goal.saved.toLocaleString()} saved of ₦
                  {goal.target.toLocaleString()}
                </p>

                {/* Progress bar */}
                <div className='w-full bg-gray-200 rounded-full h-4 overflow-hidden'>
                  <div
                    className='bg-teal-600 h-4 rounded-full transition-all duration-500 ease-in-out'
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className='text-sm mt-1 text-gray-500'>
                  {progress.toFixed(1)}% completed
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
