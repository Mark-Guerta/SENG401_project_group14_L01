import './nav-bar.css';
import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [userStatus, setUserStatus] = useState(() => {
    return localStorage.getItem("userStatus") || "Default";
  });

  useEffect(() => {
    // You can add any side effects here if needed
  }, []);

  const navigateTo = (path) => {
    window.location.href = path;
  };

  const handleSignOut = () => {
    localStorage.removeItem("userStatus");
    setUserStatus("Default");
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
        {userStatus === "Default" && (
          <>
            <div className="navbar-item" onClick={() => navigateTo('/login')}>
              <span className="navbar-item-text">Login</span>
            </div>
            <div className="navbar-item signup-button" onClick={() => navigateTo('/register')}>
              <span className="navbar-item-text">Sign Up</span>
            </div>
          </>
        )}
        {userStatus === "Logged" && (
          <div className="navbar-item" onClick={() => { handleSignOut(); }}>
            <span className="navbar-item-text">Logout</span>
          </div>
        )}
        {userStatus === "Guest" && (
          <div className="navbar-item" onClick={() => navigateTo('/login')}>
            <span className="navbar-item-text">Sign In</span>
          </div>
        )}
      </div>
    
    </nav>
  );
};

export default NavBar;
