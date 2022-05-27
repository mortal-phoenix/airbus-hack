import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <>
    <nav className='navbar'>
        <div className='navbar-container'>
            <Link to='/' classname='navbar-logo'>HACK</Link>

        </div>
    </nav>
    
    </>
  )
}

export default Navbar