import './nav-bar.css';
import React, { useState, useEffect } from 'react';

const NavBar = () => {
  const [isGuest, setIsGuest] = useState(false);

  useEffect(() => {
    const guestStatus = localStorage.getItem("isGuest");
    setIsGuest(guestStatus === "true"); 
  }, []);

  const navigateTo = (path) => {
    window.location.href = path;
  };

  const handleSignOut = () => {
    localStorage.removeItem("isGuest");
    navigateTo('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="navbar-logo">
          <img
            src="/external/rectangle11924-fc8-200h.png"
            alt="Logo"
            className="navbar-logo-img"
          />
        </div>
        <div className="navbar-item">
          <img
            src="/external/imageremovebgpreview1i192-oe3-200h.png"
            alt="White Dressing"
            className="navbar-item-img"
          />
          <span className="navbar-item-text">White Dressing</span>
        </div>
      </div>

      <div className="navbar-right">
        {isGuest ? (
          <div className="navbar-item" onClick={handleSignOut}>
            <span className="navbar-item-text">Sign Out</span>
          </div>
        ) : (
          <>
            <div className="navbar-item" onClick={() => navigateTo('/login')}>
              <span className="navbar-item-text">Login</span>
            </div>
            <div className="navbar-item signup-button" onClick={() => navigateTo('/register')}>
              <span className="navbar-item-text">Sign Up</span>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
