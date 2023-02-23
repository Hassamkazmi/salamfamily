import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import './style.css';
import BuyNow from './pages/BuyNow';
import Product from './pages/product';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [userIsDesktop, setUserIsDesktop] = useState(true);
  useEffect(() => {
    window.innerWidth < 480 ? setUserIsDesktop(true) : setUserIsDesktop(false);
  }, [userIsDesktop]);
  return (
    <React.Fragment>
      {userIsDesktop ?
        <BrowserRouter>

          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/buynow' element={<BuyNow />} />
            <Route path='/product' element={<Product />} />
          </Routes>
        </BrowserRouter> : <>This Site is not Available on this screen size</>}
    </React.Fragment>
  );
}

export default App;
