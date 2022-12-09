import React,{useContext} from 'react'
import './category.css'
import { useNavigate } from 'react-router-dom'
import favUnfilled from "../../Assets/fav.svg"
import favFilled from "../../Assets/favorite-filled.png"
import { mensItem } from '../../Assets/data'
import { Store } from '../../Store'


const CardItems = ({ option }) => {

  const {state,dispatch} = useContext(Store); 
  
  const navigate = useNavigate();

  const handleFavToggle = (item) => {
      
    if(state.fav.includes(item)){

      const favouriteItems = state.fav.filter(product => product.id !== item.id);

     return dispatch({type:'REMOVE_FAV',payload:favouriteItems})

    }

    dispatch({type:'ADD_FAV',payload:item})

  }

  return <>

    {
      option && mensItem ? 
      mensItem.filter(item => item[option] > 0 || item[option])
      .map((item, index) => {
        return <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" key={index}>
          <div>
            <div className="relative z-0 h-full">
              <img    
                className="hover:grow hover:shadow-lg h-full"
                src={item.src} alt="" onClick={()=>navigate(`/category/${item.id}`)}/>
              <img src={state.fav.find(product => product.id === item.id)? favFilled : favUnfilled} onClick={()=>handleFavToggle(item)} className="bottom-3 right-2 absolute md:w-[25px] xl:w-[35px] " alt="" />
            </div>
            <div className="pt-3 flex items-center justify-between">
              <p className="">Product Name</p>

            </div>
            <p className="pt-1 text-gray-900">&#x20b9; {item.price}</p>
          </div>
        </div>
      })
      :
        mensItem.map((item, index) => {
          return <div className="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col" key={index}>
            <div>
              <div className="relative z-0 h-full">
                
                <img
                  className="hover:grow hover:shadow-lg h-full"
                  src={item.src} alt="" onClick={() => navigate(`/category/${item.id}`)}/>
                  
                <img src={state.fav.find(product => product.id === item.id)? favFilled : favUnfilled} onClick={()=>handleFavToggle(item)} className="bottom-3 right-2 absolute md:w-[25px] xl:w-[35px] " alt="" />
              </div>

              <div className="pt-3 flex items-center justify-between">
                <p>Product Name</p>

              </div>
              <p className="pt-1 text-gray-900">&#x20b9; {item.price}</p>
            </div>
          </div>
        })
    }

  </>
}

const Category = ({ topic, option }) => {
  
  return (
    <>
      <p className='text-left mt-[6.5rem] uppercase text-[3rem] leading-[3.5rem] font-bold'>{topic} t-shirt</p>

      <section className="bg-white py-8">

        <div className="container mx-auto flex items-center flex-wrap pt-4 pb-12">

          <CardItems option={option} />

        </div>
      </section>

    </>
  )
}

export default Category