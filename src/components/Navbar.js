  import { Link } from 'react-router-dom';
import './NavbarStyles.css';

  //Functional component  rafce
  import React, {useState} from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
  
  const Navbar = () => { 
    const[click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [Color, setColor] = useState(false);
    const handleColor = () => {
      if(window.scrollY >= 100)
      {
        setColor(true);
      }else{
        setColor(false);
      }
    }
      
    window.addEventListener('scroll', handleColor);
    return (
   <div className={Color ? 'header header-bg': 'header'}>
     <Link to='/'>
        <h1>Portfolio</h1>
     </Link>
     <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li>
            <Link to='/'>Home</Link>
        </li>
        <li>
            <Link to='/Project'>Projects</Link>
        </li>
        <li>
            <Link to='/About'>About</Link>
        </li>
        <li>
            <Link to='/Contact'>Contact</Link>
        </li>
     </ul>
     <div className='hamburger' onClick={handleClick}>
        {
        click ? (<FaTimes  size={20} style={{color: 'red'}}/>)
        :  (<FaBars  size={20} style={{color: 'red'}}/>
        )} 
     </div>
   </div>
    );
};
  
  export default Navbar
  