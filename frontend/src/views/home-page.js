import React from 'react'

import { Helmet } from 'react-helmet'

import './home-page.css'

const HomePage = (props) => {
  const navigateTo = (path) => {
    window.location.href = path;
  };

  return (
    <div className="home-page-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-page-home-page">
        <div className="home-page-bottom-bar">
          <span className="home-page-text10">
            <span>Email:</span>
            <br></br>
            <span>white.dressing@coomer.com</span>
            <br></br>
            <br></br>
            <span>Phone number:</span>
            <br></br>
            <span>403-1111-2222</span>
          </span>
          <span className="home-page-text19">Contacts</span>
          <span className="home-page-text20">Account</span>
          <span className="home-page-text21">
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
          <div className="home-page-company-logo1">
            <img
              src="/external/imageremovebgpreview1i437-xpdt-400h.png"
              alt="imageremovebgpreview1I437"
              className="home-page-imageremovebgpreview11"
            />
          </div>
          <img
            src="/external/socialmedialogo1913-l84-200h.png"
            alt="SocialMediaLogo1913"
            className="home-page-social-media-logo"
          />
          <span className="home-page-text32">
            @WhiteDressing Privacy Policy AI Agreement Terms and Conditions
          </span>
        </div>
        <div className="home-page-text33">
          <span className="home-page-text34">Meals Without Limits</span>
          <span className="home-page-text35">
            Discover meals you can make with the ingredients you have. Plan,
            cook, and enjoy effortless meal prepping with our smart recipe
            suggestions.
          </span>
          <span className="home-page-text36">
            Explore diverse flavors and traditions with limitless ingredient
            pairings. From classic favorites to global cuisines, your next meal
            has no limits!
          </span>
          <span className="home-page-text37">Endless Recipes</span>
        </div>
        <div className="home-page-design">
          <img
            src="/external/ellipse94387-fg7j-1600h.png"
            alt="Ellipse94387"
            className="home-page-ellipse9"
          />
          <img
            src="/external/ellipse14328-33xc-1500h.png"
            alt="Ellipse14328"
            className="home-page-ellipse1"
          />
          <img
            src="/external/ellipse21956-8fmxj-700h.png"
            alt="Ellipse21956"
            className="home-page-ellipse2"
          />
          <img
            src="/external/ellipse31958-aud-300h.png"
            alt="Ellipse31958"
            className="home-page-ellipse3"
          />
          <img
            src="/external/ellipse41960-fh4g-200h.png"
            alt="Ellipse41960"
            className="home-page-ellipse4"
          />
          <img
            src="/external/ellipse71966-wmxm-200h.png"
            alt="Ellipse71966"
            className="home-page-ellipse7"
          />
          <img
            src="/external/ellipse61964-m80n-200h.png"
            alt="Ellipse61964"
            className="home-page-ellipse6"
          />
          <img
            src="/external/salad1983-a712-800w.png"
            alt="Salad1983"
            className="home-page-salad"
          />
          <img
            src="/external/lasagna4393-q5n9-1200w.png"
            alt="Lasagna4393"
            className="home-page-lasagna"
          />
        </div>
        <div className="home-page-signup-button1" onClick={() => navigateTo('/login')}>
          <span className="home-page-text38">Prepare Meal</span>
        </div>
        <div className="home-page-navigation-bar">
          <img
            src="/external/rectangle1196-b8es-200h.png"
            alt="Rectangle1196"
            className="home-page-rectangle1"
          />
          <div className="home-page-prepare-meal-button" onClick={() => navigateTo('/login')}>
            <div className="home-page-company-logo2">
              <img
                src="/external/imageremovebgpreview14312-gtp-200h.png"
                alt="imageremovebgpreview14312"
                className="home-page-imageremovebgpreview12"
              />
              <span className="home-page-text39">White Dressing</span>
            </div>
            <img
              src="/external/preparemeal4369-pehk-200h.png"
              alt="PrepareMeal4369"
              className="home-page-prepare-meal"
            />
            <span className="home-page-text40">Prepare Meal</span>
          </div>
          <div className="home-page-login-button" onClick={() => navigateTo('/login')}>
            <img
              src="/external/login4360-2lxu-200h.png"
              alt="Login4360"
              className="home-page-login"
            />
            <span className="home-page-text41">Login</span>
          </div>
          <div className="home-page-signup-button2" onClick={() => navigateTo('/register')}>
            <img
              src="/external/signup4348-monc-200h.png"
              alt="SignUp4348"
              className="home-page-sign-up"
            />
            <span className="home-page-text42">Sign up</span>
          </div>
          <div className="home-page-home-button" onClick={() => navigateTo('/home-page')}>
            <img
              src="/external/home4365-dpgd-200h.png"
              alt="Home4365"
              className="home-page-home"
            />
            <span className="home-page-text43">Home</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
