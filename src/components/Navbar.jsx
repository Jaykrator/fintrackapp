import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-teal-600 p-4 text-white'>
      <div className='flex justify-between items-center'>
        {/* Brand */}
        <Link to='/' className='font-bold text-xl'>
          FinTrack
        </Link>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6'>
          <Link to='/'>Home</Link>
          <Link to='/dashboard'>Dashboard</Link>
          <Link to='/transactions'>Transactions</Link>
          <Link to='/analytics'>Analytics</Link>
          <Link to='/goals'>Goals</Link>
        </div>

        {/* Mobile Hamburger */}
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className='flex flex-col mt-3 space-y-3 md:hidden'>
          <Link to='/' onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link to='/dashboard' onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
          <Link to='/transactions' onClick={() => setIsOpen(false)}>
            Transactions
          </Link>
          <Link to='/analytics' onClick={() => setIsOpen(false)}>
            Analytics
          </Link>
          <Link to='/goals' onClick={() => setIsOpen(false)}>
            Goals
          </Link>
        </div>
      )}
    </nav>
  );
}
