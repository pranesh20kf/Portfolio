import './HeroimgStyle.css';
import React from 'react'
import Introimg from '../assets/intro-bg.jpg'
import { Link } from 'react-router-dom';

const Heroimg = () => {
  return (
    <div className='Hero'>
        <div className='Mask'>
            <img className='into-img' src={Introimg} alt='Introimg' />
        </div>
        <div className='content'>
            <p>Hi i am <h5>Pranesh Fulfagar</h5></p>
            <h1>Full Stack React Developer</h1>
            <div>
               <Link to='/Project' className='btn'>Project</Link>
               <Link to='/Contact' className='btn-light'>Contact</Link>  
            </div>
        </div>
    </div> 
  );
};
export default Heroimg 

  