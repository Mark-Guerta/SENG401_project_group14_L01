import React from 'react'

import { Helmet } from 'react-helmet'

import './register.css'

const Register = (props) => {

  const navigateTo = (path) => {
    window.location.href = path;
  };
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
        <div className="register-input-login" >
         
          <span className="register-text33">Confirm Password:</span>
           <input className= "PasswordInput"
            type="password"
            placeholder="Enter your Password"
          />
          <span className="register-text34">Enter Password:</span>
          <input className= "PasswordInput2"
            type="password"
            placeholder="Re-Enter your Password"
          />
          <span className="register-text35">Enter Email:</span>
          
          <input className="reg_email"
            type="email"
            placeholder="Enter your Email"
          />


          <span className="register-text36">Enter New Username:</span>
          <input className= "reg_username"
            type="email"
            placeholder="Enter your Email"
          />
        </div>
        <img
          src="/external/signup5843-xcv-200h.png"
          alt="SignUp5843"
          className="register-sign-up1"
        />
        <span className="register-text37">Register</span>
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
          <div className="register-prepare-meal-button" onClick={() => navigateTo('/login')}>
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
          <div className="register-login-button" onClick={() => navigateTo('/login')}>
            <img
              src="/external/login1929-wkd-200h.png"
              alt="Login1929"
              className="register-login"
            />
            <span className="register-text42">Login</span>
          </div>
          <div className="register-signup-button" onClick={() => navigateTo('/register')}>
            <img
              src="/external/signup1929-0w24-200h.png"
              alt="SignUp1929"
              className="register-sign-up2"
            />
            <span className="register-text43">Sign up</span>
          </div>
          <div className="register-home-button" onClick={() => navigateTo('/')}>
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
  )
}

export default Register
