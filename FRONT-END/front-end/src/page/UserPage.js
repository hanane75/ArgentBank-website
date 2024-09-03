import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updatePseudo } from '../Reducer/authSlice';
import '../App.css';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


function UserPage() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [newPseudo, setNewPseudo] = useState(user ? user.pseudo : '');
  const [firstName, setFirstName] = useState(user ? user.firstName : '');
  const [lastName, setLastName] = useState(user ? user.lastName : '');

  if (!isAuthenticated) {
    navigate('/SignIn');
    return null;
  }

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setNewPseudo(user.pseudo); // Réinitialiser la valeur au pseudo actuel
    setFirstName(user.firstName);
    setLastName(user.lastName);
  };

  const handleConfirm = () => {
    dispatch(updatePseudo(newPseudo));
    setIsEditing(false);
  };

  return (
    <div>
      <NavBar/>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back, {firstName} {lastName}!</h1>
          {!isEditing ? (
            <>
              
              <button className='edit-button' onClick={handleEditClick}>Edit Name</button>
            </>
          ) : (
            <div  className="form-container">
              <h2>Edit Your Profile</h2>
              <form>
                <div>
                  <label>
                    Pseudo:
                    <input
                      type="text"
                      value={newPseudo}
                      onChange={(e) => setNewPseudo(e.target.value)}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    First Name:
                    <input
                      type="text"
                      value={firstName}
                      disabled
                      style={{ backgroundColor: '#e9ecef', cursor: 'not-allowed' }}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Last Name:
                    <input
                      type="text"
                      value={lastName}
                      disabled
                      style={{ backgroundColor: '#e9ecef', cursor: 'not-allowed' }}
                    />
                  </label>
                </div>
                <div className='button-edition'>
                  <button type="button" className='edit-button' onClick={handleCancel}>Cancel</button>
                  <button type="button" className='edit-button' onClick={handleConfirm}>Confirm</button>
                </div>
              </form>
            </div>
          )}
        </div>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Checking (x8349)</h3>
            <p className="account-amount">$2,082.79</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Savings (x6712)</h3>
            <p className="account-amount">$10,928.42</p>
            <p className="account-amount-description">Available Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
        <section className="account">
          <div className="account-content-wrapper">
            <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
            <p className="account-amount">$184.30</p>
            <p className="account-amount-description">Current Balance</p>
          </div>
          <div className="account-content-wrapper cta">
            <button className="transaction-button">View transactions</button>
          </div>
        </section>
      </main>
      <Footer/>
    </div>
  );
}

export default UserPage;
