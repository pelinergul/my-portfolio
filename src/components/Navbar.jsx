import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export const Navbar = () => {
    
    const [isOpen, setIsOpen] = useState(false);
    const openDrawer = () => setIsOpen(true)
    const closeDrawer = () => setIsOpen(false)
    
  return (
    <>
        <div className="navbar">
            <div id="myNav" className={`overlay ${isOpen ? 'active' : ''}`}>
                <a href="" className="closebtn" onClick={closeDrawer}>&times;</a>
                <div className="overlay-content">
                    <Link to={"#"}> About</Link>
                    <Link to={"#"}> Works</Link>
                    <Link to={"#"}> Contact</Link>
                </div>
            </div>
            <span className='hamburger-menu' onClick={openDrawer}>&#9776;</span>
        </div>
    </>
  )
}
