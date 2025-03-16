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
        
 <div className="register-bottom-bar">
          <span className="register-text10">
            <span>Email:</span>
            <br></br>
            <span>white.dressing@coomer.com</span>
            <br></br>
            <br></br>
            <span>Phone number:</span>
            <br></br>
            <span>403-1111-2222</span>
          </span>
          <span className="register-text19">Contacts</span>
          <span className="register-text20">Account</span>
          <span className="register-text21">
            <span>Forgot Password</span>
            <br></br>
            <br></br>
            <span>Frequently Asked Questions</span>
            <br></br>
            <br></br>
            <span>Sign up</span>
            <br></br>
            <br></br>
            <span>Support</span>
          </span>
          <div className="register-company-logo1">
            <img
              src="/external/imageremovebgpreview1i192-cbkc-400h.png"
              alt="imageremovebgpreview1I192"
              className="register-imageremovebgpreview11"
            />
          </div>
          <img
            src="/external/socialmedialogo1927-63ch-200h.png"
            alt="SocialMediaLogo1927"
            className="register-social-media-logo"
          />
          <span className="register-text32">
            @WhiteDressing Privacy Policy AI Agreement Terms and Conditions
          </span>
        </div>
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

          <div className="register-didyouknow">
          <span className="register-text38">Did you know?</span>
          <span className="register-text39">
            On average, people spend up to 5 hours a week deciding what to cook
            and planning meals. Imagine the time saved by having a personalized
            meal plan at your fingertips!
          </span>
        </div>
        <img
          src="/external/lprocessed15855-azr-500h.png"
          alt="lprocessed15855"
          className="register-lprocessed1"
        />
        <div className="register-navigation-bar">
          <img
            src="/external/rectangle11928-n3qf-200h.png"
            alt="Rectangle11928"
            className="register-rectangle1"
          />
          <div
            className="register-prepare-meal-button"
            onClick={() => this.navigateTo('/login')}
          >
            <div className="register-company-logo2">
              <img
                src="/external/imageremovebgpreview1i192-kat8-200h.png"
                alt="imageremovebgpreview1I192"
                className="register-imageremovebgpreview12"
              />
              <span className="register-text40">White Dressing</span>
            </div>
            <img
              src="/external/preparemeal1928-8ac-200h.png"
              alt="PrepareMeal1928"
              className="register-prepare-meal"
            />
            <span className="register-text41">Prepare Meal</span>
          </div>
          <div
            className="register-login-button"
            onClick={() => this.navigateTo('/login')}
          >
            <img
              src="/external/login1929-wkd-200h.png"
              alt="Login1929"
              className="register-login"
            />
            <span className="register-text42">Login</span>
          </div>
          <div className="register-signup-button" onClick={() => this.navigateTo('/register')}>
            <img
              src="/external/signup1929-0w24-200h.png"
              alt="SignUp1929"
              className="register-sign-up2"
            />
            <span className="register-text43">Sign up</span>
          </div>
          <div className="register-home-button" onClick={() => this.navigateTo('/')}>
            <img
              src="/external/home1929-7oua-200h.png"
              alt="Home1929"
              className="register-home"
            />
            <span className="register-text44">Home</span>
          </div>
        </div>
     

          

        </div>
      </div>
    );
  }
}

export default Register;
