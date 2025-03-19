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
    localStorage.setItem("isGuest", "false");
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
      
      <div><NavBar />
      <div className="login-container">
     
      
       
        <div className="Box-Container">


          <form onSubmit={this.handleSubmit}>
            <div >
             

              <span className="UsernameText">Username</span>
              <div className="pass-img">
              <input
                className="LoginInput"
                type="text"
                value={username}
                placeholder="Username"
                onChange={this.handleInputChange}
                name="username"
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
              />  
          

</div>
                 {error && <p className="validation-message">{error}</p>}
            
         </div>
            <span className="GuestButton" onClick={() => {
                    localStorage.setItem("isGuest", "true");
                    this.navigateTo('/prepare-meal');}}>
                 Continue as Guest</span>
            
            
            <button type="submit" className="LoginButton">
            
              <span className="LoginText">Login</span>
            </button>


          </form>
          </div>

</div>
</div>
       
  );
  };
  }


export default Login;