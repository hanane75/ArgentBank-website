import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import  {Link, NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <nav className="main-nav">
      <NavLink to="/HomePage" >
      <div className="main-nav-logo" >
        <img className="main-nav-logo-image" src='argentBankLogo.png' alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </div>
      </NavLink>
      <div>
        <Link to="/SignUp" className="main-nav-item">
        <FontAwesomeIcon icon={faUserCircle} /> Sign In
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
