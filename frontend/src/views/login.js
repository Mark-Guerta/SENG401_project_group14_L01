import React, { Component } from 'react';
import './login.css';
import NavBar from './nav-bar.js'

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
            localStorage.setItem("isGuest", "False");
            
            localStorage.setItem("username", username);

            this.setState({ error: 'Login Successful' });
            this.navigateTo('/prepare-meal');
          }
        });
    }
  }

  render()
  {
    const { username, password, error } = this.state;

    return (
      <div className="login-container">
        <NavBar />
        <div className="Box-Container">
          <form onSubmit={this.handleSubmit}>
            <div>
              <span className="UsernameText">Username</span>
              <div className="pass-img">
                <input
                  className="LoginInput"
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={this.handleInputChange}
                  name="username"
                  maxLength="15"
                  pattern="[A-Za-z0-9]{1,15}"
                  
                />
              </div>
              <span className="PasswordText">Password</span>
              <div className="pass-text">
                <input
                  className="PasswordInput3"
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={this.handleInputChange}
                  name="password"
                  maxLength="15"
                 
                  title="Max 15 chars"
                />
              </div>
              {error && <p className="validation-message">{error}</p>}
            </div>
            <span className="GuestButton" onClick={() => {
              
              this.navigateTo('/prepare-meal');
            }}>
              Continue as Guest
            </span>
            <button type="submit" className="LoginButton">
              <span className="LoginText">Login</span>
            </button>
          </form>
        </div>
      </div>
    );
  };
  }


export default Login;