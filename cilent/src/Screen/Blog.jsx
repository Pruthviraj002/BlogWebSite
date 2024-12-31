import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getBlog } from '../Slice/BlogSlice'

function Blog() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const data = useSelector(state=>state.blog.data)
  useEffect(()=>{
dispatch(getBlog())
  },[])


  // const navigate = useNavigate()

  function handleNavigate(el) {
    navigate('/single-blog', { state: { title: el.title, content: el.content } })

  }

  return (
    <div>
     <div className="container my-5">
        <div className="row">
          {data.map((el)=>(
          <div className="col-md-4 my-3">
            <div className="card shadow-lg text-center">
              <div className="card-title">
                <h1>
                    {el.title}
                </h1>
              </div>
              <div className="card-body">
                <p>{el.content}</p>
              </div>
            </div>
              <button className='btn btn-info' onClick={() => { handleNavigate(el) }}>blog</button>
          </div>
        ))}
        </div>
     </div>
     </div>
  )
}

export default Blog