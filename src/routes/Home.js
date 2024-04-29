//rafce
import React from 'react'
import Navbar from '../components/Navbar'
import Heroimg from '../components/Heroimg'
import Footer from '../components/Footer'
import Form from '../components/Form'
import AboutContent from '../components/AboutContent'
import Work from '../components/Work'

const Home = () => {
  return (
    <div>
     <Navbar/>
     <Heroimg/>
     <Work/>
     <AboutContent/>
     <Form />
     <Footer/>
    </div>
  )
}

export default Home
