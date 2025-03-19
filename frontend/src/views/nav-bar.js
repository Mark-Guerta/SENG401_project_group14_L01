import './nav-bar.css';

const NavBar = () => {

  const navigateTo = (path) => {
    window.location.href = path;
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
        <div className="navbar-item" onClick={() => navigateTo('/login')}>
          <span className="navbar-item-text">Login</span>
        </div>
        <div className="navbar-item signup-button" onClick={() => navigateTo('/register')}>
          <span className="navbar-item-text">Sign Up</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
