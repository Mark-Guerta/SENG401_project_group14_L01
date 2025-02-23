import React from 'react'

import { Helmet } from 'react-helmet'

import './home-page2.css'

const HomePage2 = (props) => {
  const navigateTo = (path) => {
    window.location.href = path;
  };
  return (
    
    <div className="home-page2-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="home-page2-home-page2">
        <div className="home-page2-bottom-bar">
          <span className="home-page2-text10">
            <span>Email:</span>
            <br></br>
            <span>white.dressing@coomer.com</span>
            <br></br>
            <br></br>
            <span>Phone number:</span>
            <br></br>
            <span>403-1111-2222</span>
          </span>
          <span className="home-page2-text19">Contacts</span>
          <span className="home-page2-text20">Account</span>
          <span className="home-page2-text21">
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
          <div className="home-page2-company-logo1">
            <img
              src="/external/imageremovebgpreview1i602-ku4t-400h.png"
              alt="imageremovebgpreview1I602"
              className="home-page2-imageremovebgpreview11"
            />
          </div>
          <img
            src="/external/socialmedialogo6025-5mq-200h.png"
            alt="SocialMediaLogo6025"
            className="home-page2-social-media-logo"
          />
          <span className="home-page2-text32">
            @WhiteDressing Privacy Policy AI Agreement Terms and Conditions
          </span>
        </div>
        <div className="home-page2-text33">
          <span className="home-page2-text34">Meals Without Limits</span>
          <span className="home-page2-text35">
            Discover meals you can make with the ingredients you have. Plan,
            cook, and enjoy effortless meal prepping with our smart recipe
            suggestions.
          </span>
          <span className="home-page2-text36">
            Explore diverse flavors and traditions with limitless ingredient
            pairings. From classic favorites to global cuisines, your next meal
            has no limits!
          </span>
          <span className="home-page2-text37">Endless Recipes</span>
        </div>
        <div className="home-page2-design">
          <img
            src="/external/ellipse96026-p0al-1600h.png"
            alt="Ellipse96026"
            className="home-page2-ellipse9"
          />
          <img
            src="/external/ellipse16026-jmr9-1500h.png"
            alt="Ellipse16026"
            className="home-page2-ellipse1"
          />
          <img
            src="/external/ellipse26026-x44n4-700h.png"
            alt="Ellipse26026"
            className="home-page2-ellipse2"
          />
          <img
            src="/external/ellipse36027-vow-300h.png"
            alt="Ellipse36027"
            className="home-page2-ellipse3"
          />
          <img
            src="/external/ellipse46027-k7s-200h.png"
            alt="Ellipse46027"
            className="home-page2-ellipse4"
          />
          <img
            src="/external/ellipse76027-p4v-200h.png"
            alt="Ellipse76027"
            className="home-page2-ellipse7"
          />
          <img
            src="/external/ellipse66027-to1-200h.png"
            alt="Ellipse66027"
            className="home-page2-ellipse6"
          />
          <img
            src="/external/salad6027-3bze-800w.png"
            alt="Salad6027"
            className="home-page2-salad"
          />
          <img
            src="/external/lasagna6027-uco-1200w.png"
            alt="Lasagna6027"
            className="home-page2-lasagna"
          />
        </div>
        <div className="home-page2-signup-button1" onClick={() => navigateTo('/prepare-meal')}>
          <span className="home-page2-text38">Prepare Meal</span>
        </div>
        <div className="home-page2-navigation-bar1">
          <img
            src="/external/rectangle16031-gd3-200h.png"
            alt="Rectangle16031"
            className="home-page2-rectangle1"
          />
          <div className="home-page2-prepare-meal-button" onClick={() => navigateTo('/prepare-meal')}>
            <div className="home-page2-company-logo2">
              <img
                src="/external/imageremovebgpreview1i603-4m26-200h.png"
                alt="imageremovebgpreview1I603"
                className="home-page2-imageremovebgpreview12"
              />
              <span className="home-page2-text39">White Dressing</span>
            </div>
            <img
              src="/external/preparemeal6031-u9mk-200h.png"
              alt="PrepareMeal6031"
              className="home-page2-prepare-meal"
            />
            <span className="home-page2-text40">Prepare Meal</span>
          </div>
          <div className="home-page2-signup-button2" onClick={() => navigateTo('/')}>
            <img
              src="/external/signup6031-mcx-200h.png"
              alt="SignUp6031"
              className="home-page2-sign-up1"
            />
            <span className="home-page2-text41">Sign out</span>
          </div>
          <div className="home-page2-signup-button3" onClick={() => navigateTo('/')}>
            <img
              src="/external/signup6031-q4y3-200h.png"
              alt="SignUp6031"
              className="home-page2-sign-up2"
            />
            <span className="home-page2-text42">Sign out</span>
          </div>
          <div className="home-page2-home-button">
            <img
              src="/external/home6032-r21-200h.png"
              alt="Home6032"
              className="home-page2-home"
            />
            <span className="home-page2-text43">Home</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage2
