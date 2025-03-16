import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './register.css';

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
          console.log(json);
          if (json.error) {
            this.setState({ error: json.error });
            this.navigateTo('/home-page2');
          } else {
            this.setState({error: 'Failed'});
       
          
          }
        });
    }
  }

  render() {
    const { username, password, email, confirmPassword, error } = this.state;

    return (
      <div className="register-container">
        <Helmet>
          <title>exported project</title>
        </Helmet>

       


        <div className="register-register">
        


            
             <div className="register-design">
          <img
            src="/external/ellipse91927-1qqs-1600h.png"
            alt="Ellipse91927"
            className="register-ellipse9"
          />
          <img
            src="/external/ellipse11927-g8dm-1500h.png"
            alt="Ellipse11927"
            className="register-ellipse1"
          />
          <img
            src="/external/ellipse21927-eyxe-700h.png"
            alt="Ellipse21927"
            className="register-ellipse2"
          />
          <img
            src="/external/ellipse31927-v3tq-300h.png"
            alt="Ellipse31927"
            className="register-ellipse3"
          />
          <img
            src="/external/ellipse41928-0i7m-200h.png"
            alt="Ellipse41928"
            className="register-ellipse4"
          />
          <img
            src="/external/ellipse71928-dcyp-200h.png"
            alt="Ellipse71928"
            className="register-ellipse7"
          />
          <img
            src="/external/ellipse61928-ubzc-200h.png"
            alt="Ellipse61928"
            className="register-ellipse6"
          />
        </div>

        

          
          <form onSubmit={this.handleSubmit}>
            <div className="register-input-login">
              <span className="ConfirmPass">Confirm Password:</span>
              <input
                className="PasswordInput"
                type="password"
                placeholder="Enter your Password"
                value={confirmPassword}
                onChange={this.handleInputChange}
                name="confirmPassword"
              />

              <span className="EnterPass">Enter Password:</span>
              <input
                className="PasswordInput2"
                type="password"
                placeholder="Re-Enter your Password"
                value={password}
                onChange={this.handleInputChange}
                name="password"
              />

              <span className="EnterEmail">Enter Email:</span>
              <input
                className="regEmail"
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={this.handleInputChange}
                name="email"
              />

              <span className="EnterUsername">Enter New Username:</span>
              <input
                className="regUsername"
                type="text"
                placeholder="Enter your Username"
                value={username}
                onChange={this.handleInputChange}
                name="username"
              />
            </div>

            {error && <p className="validation-message">{error}</p>}

            <button type="submit" className="RegisterButton">
              <img
                src="/external/signup5843-xcv-200h.png"
                alt="SignUp5843"
                className="register-sign-up1"
              />
              <span className="register-text37">Register</span>
            </button>
          </form>

          

          

        </div>
      </div>
    );
  }
}

export default Register;
