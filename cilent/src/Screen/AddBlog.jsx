import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createBlog } from '../Slice/BlogSlice'
import Hero from '../Components/Hero'

function AddBlog() {
  const [blog,setBlog] = useState({title:"",content:""})
  const dispatch = useDispatch()
  const navigate= useNavigate()

  function handleChange(e) {
    setBlog({...blog,[e.target.name]:e.target.value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(createBlog(blog)).then(()=>{
      navigate("/blog")
    })
  }
  return (
    <div>
      <Hero/>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6 my-5">
            <form className='form-control' onSubmit={handleSubmit}>
              <input type="text" name="title" onChange={handleChange} className='form control my-2' placeholder='Enter the title' />
              <input type="text" name="content" onChange={handleChange} className='form control my-2' placeholder='Enter content' />
              <input type="submit" value="blog" className="btn btn-primary" />
            </form>
          </div>
          <div className="col-md-3"></div>
        </div>
      </div>
    </div>
  )
}

export default AddBlog