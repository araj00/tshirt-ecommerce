import React from 'react'
import { Carousel } from 'antd';

import zara1 from "../../Assets/zara-images/zara-1.png"
import zara2 from "../../Assets/zara-images/zara-2.png"
import zara3 from "../../Assets/zara-images/zara-3.png"
import Navbar from '../../Navbar';

import './carousel.css'
import { Link } from 'react-router-dom';

const Landing = () => {
 
 
  return  (
    
    <div className='h-[100vh] relative '>

    <div className='absolute flex w-full justify-end z-[10] px-[10%] text-[1.2rem]'>
      <input type="text" placeholder='search' className='link link-underline link-underline-black placeholder:uppercase placeholder:text-white text-black outline-none bg-transparent'  />
      <Link className='ml-[3rem] text-[white]' to='/Login'>Login</Link>
      
    </div>
    
    <Carousel autoplay>

      <div className='h-[100vh]'>
        <img src={zara1} alt="" className="h-full w-full object-cover"/>
      </div>

      <div className='h-[100vh]'>
      <img src={zara2} className="h-full w-full object-cover" alt="" />
      </div>

      <div className='h-[100vh]' >

      <img src={zara3} className="h-full w-full object-cover" alt="" />
        
      </div>

    </Carousel>          
      <div className="absolute bottom-[3rem] text-center w-full text-[white]"><Navbar/></div>
    </div>
    )

}

export default Landing