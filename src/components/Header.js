import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup');
  }
  return (
    // ab yaha par hum user ko tab tak add product listing product edit product profile component tab tak nh dikhaenge jab tak keh user login na ho
    <div>
      {auth ? <ul className="nav-ul">
        <li><Link to="/">Products</Link></li>
        <li><Link to="/add">Add Products</Link></li>
        <li><Link to="/update">Update Products</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        {/* yaha par hum jis user name se bhi login kya hai uska nam show krwana hai lekin agr hum direct show krwaenge to nh ayega uske lye hume phle jsonme convert krna prega */}
        <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).name}) </Link> </li>
      </ul>
        :
        <ul className="nav-ul nav-right">
          <li><Link to="/signup">Sign Up</Link></li> <li><Link to="/login">Login</Link></li>
        </ul>
      }
    </div>
  );
}

export default Header;
