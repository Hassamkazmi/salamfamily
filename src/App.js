import React from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import './style.css';

function App() {
  return (
    <React.Fragment>
       <Home />
       {/* <About /> */}
      {/* <BrowserRouter>
         <Routes>
            <Route path='/' exact element={ <Home />} />
            <Route path='/about' element={<About />} />
         </Routes>
         <Home />
      </BrowserRouter> */}
    </React.Fragment>
  );
}

export default App;
