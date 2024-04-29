import { FaGithub, FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone } from 'react-icons/fa'
import './FooterStyles.css'

import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-container'>
        <div className='left'>
            <div class= 'location'>
                <FaHome size={20} style={{color : 'white', marginRight: '2rem'}} />
                <div>
                    <p>123 Housing society,chandwad</p>
                    <p>Chandwad(423101), Nashik</p>
                    <p>Maharashtra, india</p>
                </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{color : 'white', marginRight: '2rem'}}/>
                +91-9503837777</h4>
            </div>
            <div className='mail'>
                <h4><FaMailBulk size={20} style={{color : 'white', marginRight: '2rem'}}/>
                Pranesh20kf@gmail.com</h4>
            </div>
        </div>
        <div className='right'>
            <h4>About me</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus porro maxime, et laborum dignissimos ratione, dolor earum magni perferendis libero, quas ab nulla tenetur tempora cumque numquam iusto. Esse!</p>
            <div className='social'> 
            <FaInstagram size={30} style={{color : 'white', marginRight: '1rem'}}/>
            <FaLinkedin size={30} style={{color : 'white', marginRight: '1rem'}}/>
            <FaGithub size={30} style={{color : 'white', marginRight: '1rem'}}/>
           </div>      
        </div>
      </div>
    </div>
  )
}

export default Footer
