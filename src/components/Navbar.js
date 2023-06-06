import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.css'
import logo from './logoeg.png'
const navbar = () => {
  return (
    <div className='navbar'>
      <h2>EG Login Project </h2>
      <div className='nav-link'>
        <img src={logo} width="30" height="30" alt="EG" className='logo'/>
      <NavLink activeClassName="active" className='link'  to="/">Home</NavLink>
      <NavLink activeClassName="active" className='link' to="/about">About</NavLink>
      <NavLink activeClassName="active" className='link' to="/login">Login</NavLink>
      </div>
      
    </div>
    )
  
}

export default navbar