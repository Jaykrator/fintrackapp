import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className='bg-gray-900 text-gray-300 py-8 mt-10'>
      <div className='max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8'>
        {/* Brand */}
        <div>
          <h2 className='text-xl font-bold text-white'>FinTrack</h2>
          <p className='mt-2 text-sm text-gray-400'>
            Take control of your money. Track, save, and achieve your financial
            goals with ease.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className='text-lg font-semibold text-white mb-3'>Quick Links</h3>
          <ul className='space-y-2 text-sm'>
            <li>
              <Link to='/' className='hover:text-white'>
                Home
              </Link>
            </li>
            <li>
              <Link to='/dashboard' className='hover:text-white'>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to='/transactions' className='hover:text-white'>
                Transactions
              </Link>
            </li>
            <li>
              <Link to='/analytics' className='hover:text-white'>
                Analytics
              </Link>
            </li>
            <li>
              <Link to='/goals' className='hover:text-white'>
                Goals
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / Newsletter */}
        <div>
          <h3 className='text-lg font-semibold text-white mb-3'>
            Stay Updated
          </h3>
          <p className='text-sm text-gray-400 mb-3'>
            Subscribe to our newsletter to get the latest financial tips and
            updates.
          </p>
          <form className='flex'>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full px-3 py-2 rounded-l-lg text-gray-800 focus:outline-none'
            />
            <button className='bg-teal-600 px-4 py-2 rounded-r-lg hover:bg-teal-700 transition'>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div className='border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400'>
        © {new Date().getFullYear()} FinTrack. All rights reserved.
      </div>
    </footer>
  );
}
