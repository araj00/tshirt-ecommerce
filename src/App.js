import './App.css';
import Landing from './components/Carousel/Landing';
import React from 'react';
import Categories from './components/Categories/Categories';
import { Routes, Route } from 'react-router-dom'
import FavItems from './components/FavItems/FavItems';
import ShowItem from './components/ShowItem/ShowItem';
import CartItems from './components/CartItems/CartItems';
import Login from './components/Login/Login';
import Payment from './components/Payment/Payment';


function App() {
  return (
    <div className="App">
      <Routes>
        
        <Route path="/" element={<Landing />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/categories/*" element={<Categories />} />
        <Route path="/category/:userId" element={<ShowItem />} />
        <Route path='/favourites' element={<FavItems />} />
        <Route path='/cart' element={<CartItems />} />
        <Route path='/payment' element={<Payment />} />


      </Routes>
    </div>
  );
}

export default App;
