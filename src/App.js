import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import './style.css';
import BuyNow from './pages/BuyNow';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/buynow' element={<BuyNow />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
