import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="column">
          <Link to="/recipes">
            <h1 className="logo-green">eatwell</h1>
          </Link>
        </div>
        <div className="column "></div>
      </nav>
    </>
  )
}

export default Navbar
