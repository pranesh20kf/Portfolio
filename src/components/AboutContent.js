import { Link } from 'react-router-dom';
import './AboutContentStyles.css'
import React from 'react'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Who Am I?</h1>
            <p>Im a react front-end developer. I create responsive secure websites for my clients.</p>
            <Link to='/Contact' className='btn'>Contact</Link>
        </div>
        <div className='right'>
            <div className='img-container'>

            </div>
        </div>
    </div>
  )
};

export default AboutContent
