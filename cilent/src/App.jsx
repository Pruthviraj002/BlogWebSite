import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Screen/Home'
import About from './Screen/About'
import Blog from './Screen/Blog'
import Contact from './Screen/Contact'
import SingleBlog from './Screen/SingleBlog'
import AddBlog from './Screen/AddBlog'
import Login from './Screen/Login'
import Register from './Screen/Register'
import ProtectedRoute from './middleware/ProtectedRoute'
import { useSelector } from 'react-redux'
import { ClipLoader } from 'react-spinners'
// import Navbar from './Components/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const isLoading = useSelector(state=>state.user.isLoading)

//   useEffect(()=>{
//  const script = document.createElement("script")
//  script.src = "/app.js"
//  script.async = true
//  document.body.appendChild(script)

//  return ()=>{
//   document.body.removeChild(script)
//  }
//   },[])
  return (
    <>
    {/* <React.Fragment> */}
        <Navbar />
    {/* </React.Fragment> */}
    <div className={isLoading ? 'loader' : ''}>
        <ClipLoader size={100} loading={isLoading} color='white' />
    </div>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='blog' element={<Blog/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='single-blog' element={<SingleBlog/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='' element={<ProtectedRoute/>}/>
        <Route path='add-blog' element={<AddBlog />} />

        
      </Routes>
    </>
  )
}

export default App



