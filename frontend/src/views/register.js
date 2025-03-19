import React, { Component } from 'react';
import './register.css';
import NavBar from './nav-bar.js';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      email: '',
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
    const { username, password, confirmPassword, email } = this.state;
    if (!username || !password || !confirmPassword || !email) {
      this.setState({ error: 'Please fill in all fields' });
    } else if (password !== confirmPassword) {
      this.setState({ error: 'Passwords do not match' });
    } else {
      const newUser = {
        username,
        password,
        email
      };

      fetch("http://127.0.0.1:5000/register", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.error === "Signup Successful") {
            this.setState({ error: "Signup Successful" });
            this.navigateTo('/home-page2');
          } else {
            this.setState({ error: 'Failed to register' });
          }
        });
    }
  }

  render() {
    const { username, password, confirmPassword, email, error } = this.state;

    return (
      <div><NavBar />
        <div className="register-container">
          <div className="Box-Container">
            <form onSubmit={this.handleSubmit}>
              <div>
                <span className="UsernameText">Username</span>
                <input
                  className="LoginInput"
                  type="text"
                  placeholder="Enter your Username"
                  value={username}
                  onChange={this.handleInputChange}
                  name="username"
                />

                <span className="PasswordText">Password</span>
                <input
                  className="PasswordInput3"
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={this.handleInputChange}
                  name="password"
                />

                <span className="PasswordText">Confirm Password</span>
                <input
                  className="PasswordInput3"
                  type="password"
                  placeholder="Confirm your Password"
                  value={confirmPassword}
                  onChange={this.handleInputChange}
                  name="confirmPassword"
                />

                <span className="PasswordText">Email</span>
                <input
                  className="LoginInput"
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={this.handleInputChange}
                  name="email"
                />

                {error && <p className="validation-message">{error}</p>}

                <button type="submit" className="LoginButton">
                  <span className="LoginText">Register</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
