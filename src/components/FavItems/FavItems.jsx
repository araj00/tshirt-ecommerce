import React,{ useEffect } from 'react'
import { useContext } from 'react'
import { Store } from '../../Store'
import Header from '../Header/Header'
import {RxCross2} from 'react-icons/rx'
import {Link} from 'react-router-dom'

const FavItems = () => {

    const {state,dispatch} = useContext(Store);
    const {fav} = state;

    useEffect(()=>{
      return () => {
        console.log("favourite items unmounted");
      }
    },[fav])

    const removeFav = (product) => {

       const productsWithFav = state.fav.filter(fav => fav.id !== product.id);

       dispatch({type:'REMOVE_FAV',payload:productsWithFav});

    }

  return (
    <>
    <div className='px-[4rem] py-[2rem]'>

    <Header/>
    
    <p className='text-left mt-[6.5rem] uppercase text-[3rem] leading-[3.5rem] font-bold'>Favourites</p>
                                   
    <section className="bg-white py-8">

      <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

     {
        fav.length ? fav.map((product,index) =>(

         <Link className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" key={index} to={`/category/${product.id}`} >
          <div>
            <div className="relative">
              
              <img
                className="hover:grow hover:shadow-lg"
                src={product.src} alt="" />

              <div
                className='absolute md:text-[25px] xl:text-[35px]  top-3 right-2' onClick={() => removeFav(product)}><RxCross2/></div>
                
          
            </div>

            <div className="pt-3 flex items-center justify-between">
              <p>Product Name</p>

            </div>
            <p className="pt-1 text-gray-900">&#x20b9; {product.price}</p>
          </div>
       </Link>
        ))
        :
        <div className='text-[2rem]'>There is no fav items!</div>
      }

        

      </div>
    </section>
      </div>
    </>
  )
}

export default FavItems