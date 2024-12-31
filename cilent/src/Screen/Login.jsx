import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../Slice/userSlice'
import Hero from '../Components/Hero'

function Login() {
  const [user,setUser] = useState({email:"",password:""})
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  

  function handleChange(e) {
    setUser({...user,[e.target.name]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(login(user)).then((data)=>{
      if (data.payload.token) {
        navigate("/add-blog")
      } else {
        alert("Invalid email or password")
      }
    })
  }
  return (
    <div>
      <Hero/>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 my-5">
            <div className="card shadow-lg">
              <form onSubmit={handleSubmit} className='form-control'>
                <input type="text" name="email" onChange={handleChange}  placeholder='Enter your email' className='form-control my-2 px-2' />
                <input type="password" name="password" onChange={handleChange} placeholder='Enter your password' className='form-control px-2' />
                <input type="submit" value="login" className="btn btn-primary" />
              </form>
            </div>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}

export default Login