import React from 'react'
import img1 from '../assets/image 5 (1).png'
import img2 from '../assets/image 7 (1).png'
import img3 from '../assets/image 8 (1).png'
import img4 from '../assets/image 7 (1).png'
import { Link } from 'react-router-dom'

const SideBar = () => {
  return (
    <React.Fragment>
        <div className="container-fluid">
            <div className='menu'>
                <div className='item'>
                    <span className='whitebg'>
                   <Link to='/' className='linkstyle'>
                    <span className='navimg newabout'>
                    <span className='text1'>Home</span>
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
