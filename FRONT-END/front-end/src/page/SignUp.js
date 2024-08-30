import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function SignUp() {
  const navigate = useNavigate(); // Initialisation du hook useNavigate

  const handleSignIn = (e) => {
    e.preventDefault();
    // Logique pour vérifier les identifiants 
    navigate('/User'); // Rediriger vers la page utilisateur
  };

  return (
    <div>
      <NavBar />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <FontAwesomeIcon icon={faUserCircle} className="sign-in-icon" />
          <h1>Sign In</h1>
          <section>
            <form onSubmit={handleSignIn}>
              <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" />
              </div>
              <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
              </div>
              <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
              </div>
              <button type="submit" className="sign-in-button">Sign In</button>
            </form>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default SignUp;
