import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import './style.css';
import BuyNow from './pages/BuyNow';
import Product from './pages/product';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>

        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/buynow' element={<BuyNow />} />
          <Route path='/product' element={<Product />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
