import React from 'react';
import NavBar from '../components/NavBar';
import SignIn from '../components/SignIn';
import Footer from '../components/Footer';
import '../App.css';

function SignUp() {
    return (
      <div>
         <NavBar/> 
         <SignIn />
         <Footer />
      </div>
    
    );
  };
  
  export default SignUp;
  