import React from 'react'
import { useContext } from 'react'
import { Store } from '../../Store'
import { ImBin } from "react-icons/im"
import { Link } from 'react-router-dom'
import Header from '../Header/Header'
import './cartitems.css'

const CartItem = ({ product }) => {

  return (<div>

    <div className='col'>
      <div className='col-1'>
        <img src={product.images.src} className='box object-contain' />
      </div>
      {product.logoString && <div className='col-1'>
        <img src={product.logoString} className='box object-contain' />
      </div>}
      



      <div className='col-2'>
        <ImBin className='bin'></ImBin>
        <p className='title'>Relaxed Fit T-Shirt<br />{product.images.price}</p>
        <p className='details'>Colour : <span>  {product.images.color} </span><br />Size : <span> {product.size} </span></p>

      </div>

    </div>

  </div>

  )
}





const CartItems = () => {

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  console.log(cart);

  return (
    <>

      <div className='px-[4rem] py-[2rem]'>

        <Header />

        {cart.length ? <div className='text-[2rem]'>Cart Items:</div> : null}

        {cart.length ? cart.map(product => {

          return <CartItem product={product} />

        }
        ) : <p className='text-[2rem]'>Empty Cart</p>
        }

    
        {cart.length ? <Link to="/payment" className='orderbtn'>place order</Link> : null}


      </div>
    </>
  )
}

export default CartItems