import React from 'react'
import "./navbar.css"

const NavBar = () => {
  return (
    <div >

        <div class="navbar">
         <h2 className='header'>Shopper</h2>
            <div className='searchbar'>
                <input type="text" placeholder="Search deals" />
            </div>
            <div class= "links">
                <ul>
                    <li>Services</li>
                    <li>About Us</li>
                    <li>Register</li>
                    <li>Log In</li>
                    <li>Log Out</li>
                    
                </ul>
            </div>
        </div>
    </div>
    
  )
}

export default NavBar