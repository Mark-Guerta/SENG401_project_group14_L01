import './nav-bar.css';
import React, { useEffect } from 'react';

const NavBar = () => {
  const isGuest = localStorage.getItem("isGuest");

  useEffect(() => {
   
  }, []);

  const navigateTo = (path) => {
    window.location.href = path;
  };

  const handleSignOut = () => {
    localStorage.setItem("isGuest","True");
    navigateTo('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
        </div>
        <div className="navbar-item">
          <img
            src="/external/Logo2.gif"
            alt="White Dressing"
            className="navbar-item-img"
          
          />
          <span className="navbar-item-logotext">White Dressing</span>
       
        </div>
      </div>

      <div className="navbar-right">
        {isGuest ? (
          <>
          <div className="navbar-item" onClick={() => navigateTo('/prepare-meal')}>
              <span className="navbar-item-text">Prepare Meal</span>
            </div>

            <div className="navbar-item" onClick={() => navigateTo('/profile-page')}>
              <span className="navbar-item-text">Profile</span>
            </div>
            <div className="navbar-item" onClick={handleSignOut}>
              <span className="navbar-item-text">Log Out</span>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-item" onClick={() => navigateTo('/login')}>
              <span className="navbar-item-text">Login</span>
            </div>
            <div className="navbar-item signup-button" onClick={() => navigateTo('/register')}>
              <span className="navbar-item-text">Register</span>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
