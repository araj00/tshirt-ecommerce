import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Navbar = () => {

  return (
    <>
    <div className='flex justify-center gap-[2rem] text-[1.5rem]'> 
  <div className='link link-underline link-underline-black'>
    <NavLink to="/categories/men">Men</NavLink>
  </div>
  <div className='link link-underline link-underline-black'>
    <NavLink to="/categories/women">Women</NavLink>
  </div>
  <div className='link link-underline link-underline-black'>
    <NavLink to="/categories/bestselling">Best seller</NavLink>
  </div>
  <div className='link link-underline link-underline-black'>
    <NavLink to="/categories/discount">Discount</NavLink>
  </div>

</div>
  <Outlet/>
    </>
  )
}

export default Navbar