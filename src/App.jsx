import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// Pages
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Transactions from './pages/Transactions';
import Analytics from './pages/Analytics';
import Goals from './pages/Goals';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='p-4'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/transactions' element={<Transactions />} />
          <Route path='/analytics' element={<Analytics />} />
          <Route path='/goals' element={<Goals />} />
        </Routes>
      </div>
      <Footer /> {/* Always visible at bottom */}
    </Router>
  );
}

export default App;
