import React, { useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

import Hero from '../Components/Hero'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { register } from '../Slice/userSlice'

function Register() {
  const [user,setUser] = useState({name:"",email:"",password:""})
  const [confirmPassword,setConfirmPassword] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isLoading = useSelector(state=>state.user.isLoading)
  const errorMessage = useSelector(state => state.user.errorMessage)

  function handleChange(e) {
    setUser({...user,[e.target.name]:e.target.value})
  }

  function handleConfirmPassword(e) {
    setConfirmPassword(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (confirmPassword && confirmPassword == user.password ) {
      dispatch(register(user)).then(()=>{
        navigate("/login")
      })
    } else {
      alert("check password again !!!!!")
    }
    cls()
  }

  function cls() {
    setUser({name:"",email:"",password:""},
      setConfirmPassword("")
    )
  }
  return (
    <div>
      <ClipLoader loading={isLoading}/>
      {
      errorMessage && <h1>{errorMessage}</h1>
      }
      <Hero/>
      <div className="container">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 my-5">
            <div className="card shadow-lg">
              <form onSubmit={handleSubmit} className='form-control '>
                <input type="text" placeholder='Enter your name' onChange={handleChange} name='name' className='form-control my-2' />
                <input type="email" placeholder='Enter your email' onChange={handleChange} name='email' className='form-control my-2' />
                <input type="password" placeholder='Enter your password' onChange={handleChange} name='password' className='form-control my-2' />
                <input type="password" placeholder='Enter your confirm password'  onChange={handleConfirmPassword} className='form-control my-2' />
                <input type="submit" value="register" className="btn btn-primary my-2" />
              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}

export default Register