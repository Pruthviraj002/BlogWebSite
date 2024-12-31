import React from 'react'
import Hero from '../Components/Hero'
import About from '../Components/About'
import Services from '../Components/Services'
import Footer from '../Components/Footer'

function Home() {
  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home