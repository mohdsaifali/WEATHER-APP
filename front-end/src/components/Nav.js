import React from 'react'
import { Link, useNavigate } from "react-router-dom"
function Nav() {
  const auth = localStorage.getItem('user')
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup')
  }
  return (
    <div>
      {auth ? <ul className='nav-ul'>
        <li> <Link to="/">Weather App</Link></li>
        <li> <Link onClick={logout} to="/signup">Log out ({JSON.parse(auth).name})</Link> </li>

      </ul>
        :
        <ul className='nav-ul nav-right'>
          <li> <Link to="/signup">Sign Up</Link></li>
          <li> <Link to="/login">Log In </Link></li>
        </ul>
      }
    </div>
  )
}

export default Nav;