import React, { useContext } from 'react'
import { mensItem } from '../../Assets/data'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { BiArrowBack } from 'react-icons/bi'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { BsHandbag } from 'react-icons/bs'
import signin from "../../Assets/signin.svg"
import Navbar from '../../Navbar'

import { Store } from '../../Store'
import "./showitem.css"
import { useState } from 'react'

const ShowItem = () => {

  const [size, setSize] = useState(null);

  const [active, setActive] = useState(null);

  const { state, dispatch } = useContext(Store);

  const [file, setFile] = useState(null)

  const [imgString, setImgString] = useState(null)

  const { userId } = useParams();
  const Navigate = useNavigate();

  const handleClick = (e) => {
    // if (prev !== null) {

    //   prev.classList.remove("selected");
    // }
    // prev = e.target;
    setSize(e.target.textContent);
    setActive(e.target.textContent);

    // e.target.classList.add("selected");
  }

  const handleCart = (images) => {

    if (size === null) {
      return alert("choose size first");
    }

    const toAddItem = {
      id: images.id + "-" + size,
      images,
      "size": size,
      quantity: 1,
      logoString: imgString
    }

    console.log(images)

    const addToCarted = state.cart.find(product => { console.log(product); if (product.id === toAddItem.id) return product });

    console.log("addtocarted", addToCarted)



    if (addToCarted) {
      console.log('up date to cart')

      dispatch({ type: "UPDATE_CART", payload: { id: addToCarted.id } })

    } else {
      console.log('added to cart')
      dispatch({ type: "ADD_CART", payload: toAddItem })
    }


  }


  console.log(userId);

  const images = mensItem.find(item => item.id === parseInt(userId));

  const handleFile = (evert) => {

    let reader = new FileReader();
    reader.readAsDataURL(evert);
    reader.onload = function () {
      setImgString(reader.result)
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
  }

  return (
    <div className='px-[4rem] py-[2rem]'>
      <div className='flex justify-between mb-[4rem]'>
        <div className='text-[2rem] cursor-pointer' onClick={() => Navigate(-1)}><BiArrowBack /></div>

        <div className='flex gap-x-[2rem]'>

          <div className='flex items-center'>

            <img src={signin} className="w-[2rem]" alt="" />
            <Link to="/Login" className="w-max">signin</Link>
          </div>
          <div className='flex items-center'>
            <div className='text-[2rem]'><MdOutlineFavoriteBorder /></div>
            <Link to="/favourites" className='text-capitalize'>favourites</Link>
          </div>
          <div className='flex items-center'>
            <div className='text-[2rem] relative'>
              <BsHandbag />
              <div className='absolute text-[#B80303] left-[10px] top-[10px] font-extrabold text-[1rem]'>{state.cart.length}</div>
              </div>
            <Link to="/cart" className='text-capitalize'>cart</Link>
          </div>
        </div>
      </div>

      <Navbar />

      <div className='flex mt-[3rem] flex-wrap gap-x-10 '>
        <div className='md:w-full lg:w-1/2 flex gap-x-2 relative'>
          <img src={images.preview.src1} className="w-1/2" alt="" />
          {imgString ? <img src={imgString} alt="" srcset="" className='w-[100px]  left-[18%] absolute top-[40%]' /> : null}

          {
          imgString ? 
          <img src={images.preview.src1} className="w-1/2" alt="" />
        : null  
        }
        </div>
        <div className='flex flex-col grow'>
          <div className='capitalize text-[2rem]'>
            Relaxed fit t-shirt
          </div>
          <div className='text-[1.5rem]'>&#x20b9;{images.price}</div>

          <div className='capitalize my-[1.5rem]'>Color:{images.color}</div>

          <div className='capitalize'>size</div>

          <div className='flex gap-3'>


            <button className={active === "XS" ? `selected text-black rounded-full bg-[#D9D9D9] font-normal w-[3rem] h-[3rem]` : `text-black rounded-full bg-[#D9D9D9] font-normal w-[3rem] h-[3rem] `} onClick={(e) => handleClick(e)}>XS</button>
            <button className={active === "S" ? `selected text-black rounded-full bg-[#D9D9D9] font-normal w-[3rem] h-[3rem]` : `text-black rounded-full bg-[#D9D9D9] font-normal w-[3rem] h-[3rem] `} onClick={(e) => handleClick(e)}>S</button>
            <button className={active === "M" ? `selected text-black rounded-full bg-[#D9D9D9] font-normal w-[3rem] h-[3rem]` : `text-black rounded-full bg-[#D9D9D9] font-normal w-[3rem] h-[3rem] `} onClick={(e) => handleClick(e)}>M</button>
            <button className={active === "L" ? `selected text-black rounded-full bg-[#D9D9D9] font-normal w-[3rem] h-[3rem]` : `text-black rounded-full bg-[#D9D9D9] font-normal w-[3rem] h-[3rem] `} onClick={(e) => handleClick(e)}>L</button>
            <button className={active === "XL" ? `selected text-black rounded-full bg-[#D9D9D9] font-normal w-[3rem] h-[3rem]` : `text-black rounded-full bg-[#D9D9D9] font-normal w-[3rem] h-[3rem] `} onClick={(e) => handleClick(e)}>XL</button>

          </div>

          <button className='flex rounded-full items-center gap-1 justify-center w-full p-3 text-[1.5rem] mt-[3.125rem] text-[#fff] bg-black button-click' onClick={() => handleCart(images)}>


            <BsHandbag />

            <div className='uppercase' onClick={() => handleCart(images)}>Add to cart</div>
          </button>
          <input type="file" onChange={(e) => handleFile(e.target.files[0])} />
        </div>
      </div>



    </div>
  )
}

export default ShowItem