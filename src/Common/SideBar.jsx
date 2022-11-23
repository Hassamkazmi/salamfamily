import React from 'react';
import { Link ,BrowserRouter } from 'react-router-dom';
import img1 from '../assets/image 5.png'
import img2 from '../assets/image 8.png'
import img3 from '../assets/image 6.png'
import img4 from '../assets/image 7.png'

const SideBar = () => {
  return (
    <React.Fragment>
        <div className="container-fluid">
            <div className='menu'>
                
                <div className='item'>
                    <span className='whitebg'>
                        <Link to='/about'>
                            <span className='text'>About</span>
                            <span className='navimg'>
                                <img src={img1} alt="img" />
                            </span>
                    </Link>
                    </span>
                </div>
                
                <div className='item'>
                <span className='whitebg'>
                <span className='text'>ESG</span>
                    <span className='navimg'>
                        <img src={img2} alt="img" />
                    </span>
                    </span>
                </div>
                <div className='item '>
                <span className='whitebg'>
                <span className='text'>Products</span>
                    <span className='navimg'>
                        <img src={img3} alt="img" />
                    </span>
                    </span>
                </div>
                <div className='item iteminner'>
                <span className='whitebg'>
                <span  className='text'>FUNDS PERFORMANCE</span>
                    <span className='navimg'>
                        <img src={img4} alt="img" />
                    </span>
                    </span>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default SideBar
