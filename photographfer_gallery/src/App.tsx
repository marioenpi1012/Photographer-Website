import './App.css';
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home'
import Nav from './components/Nav';
import Footer from './components/Footer';
import Stories from './pages/Stories';
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route path='/stories' element={<Stories />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;

