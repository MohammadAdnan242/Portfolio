import React from 'react'
import Hero from '../src/components/Hero'
import Navbar from '../src/components/Navbar'
import Portfolio from './components/Portfolio'
import Experience from './components/Experience'
import Certifications from './components/Certification'
import Contact from './components/Contact'
import Footer from './components/Footer'
const App = () => {
  return (
  <>
    <Navbar/>
    <Hero/>
    <Portfolio/>
    <Experience/>
    <Certifications/>
    <Contact/>
    <Footer/>

  </>
  )
}

export default App
