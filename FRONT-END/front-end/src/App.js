import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import HomePage from './page/HomePage'; // Page d'accueil
import SignUp from './page/SignUp'; // Page de connexion
import UserPage  from './page/UserPage';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Navigate replace to="/HomePage" />} />
    <Route path="/HomePage" element={<HomePage />} />
    <Route path="/SignUp" element={<SignUp />} /> 
    <Route path="/UserPage" element={<ProtectedRoute> <UserPage /></ProtectedRoute> } />
  </Routes>
</Router>
  );
}

export default App;
