import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <ul >
    <li >
      <Link to="/register">Register</Link>
    </li>
    <li >
      <Link to="/login">Login</Link>
    </li>
    <li >
      <Link  to="/search">Search</Link>
    </li>
  </ul>
  </> 
  )
}

export default Header
