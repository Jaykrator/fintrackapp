import { useNavigate } from 'react-router-dom';
import { TrendingUp, PieChart, Target } from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      {/* Hero Section */}
      <section className='bg-teal-50 py-16 px-6 text-center md:text-left md:flex md:items-center md:justify-between'>
        <div className='max-w-lg mx-auto md:mx-0'>
          <h1 className='text-4xl md:text-5xl font-bold text-teal-700 leading-tight mb-4'>
            Take Control of Your Finances
          </h1>
          <p className='text-gray-600 text-base md:text-lg mb-6'>
            FinTrack helps you track your expenses, set financial goals, and
            visualize your money like never before.
          </p>
          <button
            onClick={handleGetStarted}
            className='bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition w-full sm:w-auto'
          >
            Get Started
          </button>
        </div>
        <div className='mt-10 md:mt-0 md:w-1/2 flex justify-center'>
          <img
            src='https://img.freepik.com/free-vector/finance-dashboard-concept-illustration_114360-7557.jpg'
            alt='Finance Dashboard'
            className='w-full max-w-xs sm:max-w-sm md:max-w-md rounded-lg shadow-md'
          />
        </div>
      </section>

      {/* Features Section */}
      <section className='py-16 px-6 bg-white'>
        <h2 className='text-3xl font-bold text-center text-teal-700 mb-10'>
          Why Choose FinTrack?
        </h2>
        <div className='grid gap-8 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto'>
          <div className='p-6 bg-teal-50 rounded-xl shadow hover:shadow-lg transition text-center'>
            <TrendingUp className='w-12 h-12 text-teal-600 mx-auto mb-4' />
            <h3 className='text-lg font-semibold mb-2'>Track Transactions</h3>
            <p className='text-gray-600 text-sm md:text-base'>
              Easily record your expenses and income to see where your money
              goes.
            </p>
          </div>
          <div className='p-6 bg-teal-50 rounded-xl shadow hover:shadow-lg transition text-center'>
            <PieChart className='w-12 h-12 text-teal-600 mx-auto mb-4' />
            <h3 className='text-lg font-semibold mb-2'>Visualize Spending</h3>
            <p className='text-gray-600 text-sm md:text-base'>
              Get insights through charts and reports that help you spend
              smarter.
            </p>
          </div>
          <div className='p-6 bg-teal-50 rounded-xl shadow hover:shadow-lg transition text-center'>
            <Target className='w-12 h-12 text-teal-600 mx-auto mb-4' />
            <h3 className='text-lg font-semibold mb-2'>Set Goals</h3>
            <p className='text-gray-600 text-sm md:text-base'>
              Save for your future by setting realistic financial goals and
              tracking progress.
            </p>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className='bg-teal-600 text-white py-16 text-center px-6'>
        <h2 className='text-2xl md:text-3xl font-bold mb-4'>
          Start Your Financial Journey Today
        </h2>
        <p className='text-base md:text-lg mb-6 max-w-xl mx-auto'>
          Join hundreds of people already taking control of their finances with
          FinTrack.
        </p>
        <button
          onClick={handleGetStarted}
          className='bg-white text-teal-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition w-full sm:w-auto'
        >
          Get Started
        </button>
      </section>
    </div>
  );
}
