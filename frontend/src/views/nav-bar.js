
const NavBar =() =>{


    return(
        <div className="login-container">

      
      <div className="login-navigation-bar">
      <img
        src="/external/rectangle11924-fc8-200h.png"
        alt="Rectangle11924"
        className="login-rectangle1"
      />
      <div className="login-prepare-meal-button">
 
          <img
            src="/external/imageremovebgpreview1i192-oe3-200h.png"
            alt="imageremovebgpreview1I192"
            className="login-imageremovebgpreview12"
          />
          <span className="login-text39">White Dressing</span>
        
      
        </div>
      <div className="login-login-button">
        <img
          src="/external/login1925-9i85-200h.png"
          alt="Login1925"
          className="login-login2"
        />
        <span className="login-text41">Login</span>
      </div>
      <div className="login-signup-button2" onClick={() => this.navigateTo('/register')}>
        <img
          src="/external/signup1925-o1w2-200h.png"
          alt="SignUp1925"
          className="login-sign-up2"
        />
        <span className="login-text42">Sign up</span>
      </div>
      </div>
      </div>
    );
};

export default NavBar;
