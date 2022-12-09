import React from 'react'
import Navbar from '../../Navbar'
import Category from '../Category/Category'
import Header from '../Header/Header'
import { Routes,Route} from 'react-router-dom'


const Categories = () => {

  return (
    <div className='px-[4rem] py-[2rem]'>

      <Header/>

   <Routes>

     <Route element={<Navbar/>}>

       <Route index element={<Category/>}/>
       <Route path='men' element={<Category topic="men's"  option={null}/>}/>
       <Route path='women' element={<Category topic="women's" option={null}/>}/>
       <Route path='bestselling' element={<Category topic="bestselling" option="bestselling"/>}/>
       <Route path='discount' element={<Category topic="discount"  option="discount"/>}/>
       
      </Route>

   </Routes>

    </div>
  )
}

export default Categories