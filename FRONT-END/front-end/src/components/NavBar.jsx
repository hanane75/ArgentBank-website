import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../Reducer/authSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

function NavBar() {
  const dispatch = useDispatch();
  // Utiliser useSelector pour obtenir l'état d'authentification et les informations de l'utilisateur
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src="argentBankLogo.webp"
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div className="navout">
        {!isAuthenticated ? (
          <Link to="/SignUp" className="main-nav-item">
            <FontAwesomeIcon icon={faUserCircle} />
            Sign In
          </Link>
        ) : (
          <>
            <span className="main-nav-item">
              <FontAwesomeIcon icon={faUserCircle} />
              {/* Affiche le pseudo si disponible, sinon affiche le prénom */}
              {user ? (user.pseudo ? user.pseudo : user.firstName) : ''}
            </span>
            <Link to="/SignUp" onClick={handleLogout} className="main-nav-item">
              <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
