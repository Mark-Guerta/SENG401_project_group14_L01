import './nav-bar.css';
import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isGuest, setIsGuest] = useState(localStorage.getItem("isGuest") === 'true'); 

  useEffect(() => {
    // Listen for changes in the localStorage item
    const handleStorageChange = () => {
      setIsGuest(localStorage.getItem("isGuest") === 'true');
    };

    // Set up the event listener for localStorage changes
    window.addEventListener('storage', handleStorageChange);

   
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  const navigateTo = (path) => {
    window.location.href = path;
  };

  const handleSignOut = () => {
    localStorage.setItem("isGuest", 'true');
    setIsGuest(true); // Update state immediately
    navigateTo('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo"></div>
        <div className="navbar-item" onClick={() => navigateTo('/')}>
          <img onClick={() => navigateTo('/login')} 
               src="/external/Logo2.png"
               alt="White Dressing"
               className="navbar-item-img" />
          <span className="navbar-item-logotext" onClick={() => navigateTo('/login')}>White Dressing</span>
        </div>
      </div>
      <div className="navbar-right">
        {!isGuest ? (
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
