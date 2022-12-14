import './App.css';
import React from 'react';
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './pages/Home'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Stories from './pages/Stories';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import { AnimatePresence } from 'framer-motion'
function App() {
  const location = useLocation()
  return (
    <div className="App overflow-x-hidden">
      <Nav />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path='/' index element={ <Home />} />
          <Route path='/stories' element={<Stories />} />
          <Route path='/features' element={<Features />} />
          <Route path='/pricing' element={<Pricing />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
export default App;



