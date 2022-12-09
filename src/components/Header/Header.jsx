import React from 'react'
import {HiHome} from 'react-icons/hi'
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import signin from "../../Assets/signin.svg"
import {BsHandbag} from 'react-icons/bs'
import { Link, useNavigate} from 'react-router-dom'
import { useContext } from 'react'
import { Store } from '../../Store'


const Header = () => {

    const {state} = useContext(Store);

    const Navigate = useNavigate();

  return (
    <div className='flex justify-between mb-[4rem]'>
        <div className='text-[2rem] cursor-pointer' onClick={() => Navigate("/") }><HiHome/></div>

        <div className='flex gap-x-[2rem]'>

         <div className='flex items-center'>
            <img src={signin} className="w-[2rem]" alt="" />
            <Link to="/Login" className="w-max">signin</Link>
         </div>
         <div className='flex items-center'>
            <div className='text-[2rem]'><MdOutlineFavoriteBorder/></div>
            <Link to="/favourites" className='text-capitalize'>favourites</Link>
         </div>
         <div className='flex items-center'>
            <div className='text-[2rem] relative'>
               <BsHandbag/>
               <div className='absolute text-[#B80303] left-[10px] top-[10px] font-extrabold text-[1rem]'>{state.cart.length}</div>
               </div>
            <Link to="/cart" className='text-capitalize'>cart</Link>
         </div>
        </div>
      </div>
  )
}

export default Header