import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = ({ newRequest, handleChange }) => {
  return (
    <>
      <nav className="navbar">
        <div className="column">
          <Link to="/">
            <h1 className="logo-green">eatwell</h1>
          </Link>
        </div>
        <div className="column ">
          <form onSubmit={newRequest} className="search-form">
            <input
              type="text"
              className="input search-bar"
              placeholder="Search recipes"
              onChange={handleChange}
            ></input>
            <button className="button search-button">Search</button>
          </form>
        </div>
      </nav>
    </>
  )
}

export default Navbar
