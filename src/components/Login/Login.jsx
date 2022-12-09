import React, { useState } from 'react'
import './Login.scss'
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa'
import login from "../../Assets/login-img/login.png"
import signup from "../../Assets/login-img/signup.png"
import { Link } from 'react-router-dom'
import SocialSignIn from '../SocialSignIn/SocialSignIn'

const Login = () => {

  const [signUp,setSignUp] = useState(true);
  const [name,setName] = useState([])
  const [email,setEmail] = useState([])
  const [password,setPassword] = useState([])

  const handleLogin =async()=>{
    let result = await fetch("http://localhost:1999/api/v1/login",{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    result= await result.json()
    console.log(result)
    localStorage.setItem("AUTH",result?.token)
  }

  const handleSignup =async()=>{
    let result = await fetch("http://localhost:1999/api/v1/signup",{
      method:"post",
      body:JSON.stringify({name,email,password}),
      headers:{
        "Content-Type":"application/json"
      }
    })
    result= await result.json()
    console.log(result)
    localStorage.setItem("AUTH",result?.token)
  }
  const toggleSignUp = () => {
    setSignUp(!signUp);
  }

  return (
    <div className='Login'>

      <div className={signUp ? 'container' : 'container sign-up-mode'}>

        <div className="forms-container">
          
         <div className="signin-signup">

          <form action="#" className="sign-in-form">

            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <div className="input-icons">
                <FaUser />
              </div>
              <input type="text" placeholder="Email" 
              onChange={(e)=>setEmail(e.target.value)} value={email} required/>
            </div>
            <div className="input-field">
              <div className="input-icons">
                <FaLock />
              </div>
              <input type="password" placeholder="Password" 
              onChange={(e)=>setPassword(e.target.value)} value={password} required/>
            </div>

            <button className="button-81" >
              <Link to="/" onClick={handleLogin}>
                Login
              </Link>
            </button>

            <Link to = "#" className='forgotpass'>forgot your password</Link>
            
            <p className="social-text">Or Sign in with social platforms</p>

            <div className="social-media">
              <SocialSignIn />
            </div>
          </form>

          <form action="#" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <div className="input-icons">
                <FaUser />
              </div>
              <input type="text" placeholder="Username" 
              onChange={(e)=>setName(e.target.value)} value={name} required/>
            </div>
            <div className="input-field">
              <div className="input-icons">
                <FaEnvelope />
              </div>
              <input type="email" placeholder="Email" 
              onChange={(e)=>setEmail(e.target.value)} value={email} required/>
            </div>
            <div className="input-field">
              <div className="input-icons">
                <FaLock />
              </div>
              <input type="password" placeholder="Password" 
              onChange={(e)=>setPassword(e.target.value)} value={password} required/>
            </div>

            <button className="button-81">
              <Link to="/" onClick={handleSignup}>Sign up</Link>
            </button>
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <SocialSignIn />
            </div>
          </form>
         </div>
        </div>
        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <br />
              <button 
                className="btn transparent"
                id="sign-up-btn"
                onClick={() => toggleSignUp()}
                style={{ color: "#fff", cursor: "pointer" }}
              >
                Sign up
              </button>
            </div>
            <img src={login} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <br />
              <button 
                className="btn transparent"
                id="sign-in-btn"
                onClick={() => toggleSignUp()}
                style={{ color: "#fff", cursor: "pointer" }}
              >
                Sign in
              </button>
            </div>
            <img src={signup} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>

  )
}

export default Login