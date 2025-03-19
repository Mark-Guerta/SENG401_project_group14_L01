import React, { Component } from 'react';
import './login.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  navigateTo = (path) => {
    window.location.href = path;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (!username || !password) {
      this.setState({ error: 'Please fill in all fields' });
    } else {
      const user = {
        username,
        password
      };

      fetch("http://127.0.0.1:5000/login", {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then((response) => response.json())
        .then((json) => {
          localStorage.setItem("username", username);
          if (json.error == 'Login Failed') {
            this.setState({ error: 'Username or Password does not exist' });
          } else {
            localStorage.setItem("isGuest", "false");
            
            localStorage.setItem("username", username);

            this.setState({ error: 'Login Successful' });
            this.navigateTo('/home-page2');
          }
        });
    }
  }

  render()
  {
    const { username, password, error } = this.state;

    return (
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
    
     

    
       
        <div className="login-login1">


          <form onSubmit={this.handleSubmit}>
            <div >
              <span className="login-text33">Password:</span>
              <input
                className="PasswordInput3"
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={this.handleInputChange}
                name="password"
              />

              <span className="login-text34">Username</span>
              <input
                className="LoginInput"
                type="text"
                value={username}
                placeholder="Username"
                onChange={this.handleInputChange}
                name="username"
              />
              <img
                src="/external/rectangle51932-qb4-200h.png"
                alt="Rectangle51932"
                className="login-text300"
              />
              <span className="login-text35" onClick={() => {
                    localStorage.setItem("isGuest", "true");
                    this.navigateTo('/prepare-meal');}}>
                 Continue as Guest</span>
                 {error && <p className="validation-message">{error}</p>}
            </div>
  
            <button type="submit" className="login-signup-button1">
              <img
                src="/external/signup5818-3wp5-200h.png"
                alt="SignUp5818"
                className="login-sign-up1"
              />
              <span className="login-text36">Login</span>
            </button>
          </form>
  
       


        
       
          </div>


        </div>
  );
  };
  }


export default Login;