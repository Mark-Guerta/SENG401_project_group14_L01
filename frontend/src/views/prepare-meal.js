import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import './prepare-meal.css'

const PrepareMeal = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [isGuest, setIsGuest] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const guestStatus = localStorage.getItem("isGuest");
    setIsGuest(guestStatus === "true"); 
  }, []);

  const navigateTo = (path) => {
    window.location.href = path;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputText) {
      setError('Please enter your ingredients');
    } else {
      const requestData = {
        ingredients: inputText
      };

      fetch("http://127.0.0.1:5000/prepare-meal", {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.text())
        .then((text) => {
          if (text.includes("Generation Successful")) {
            setError("Generation Successful");
            console.log("Generated Meal:", text);
            setOutputText(text); 
          } else {
            setError('Failed to generate recipes');
          }
        });
    }
  };

  return (
    <div className="prepare-meal-container">
      <Helmet>
        <title>White Soup</title>
      </Helmet>
      <div className="prepare-meal-prepare-meal1">
        <div className="prepare-meal-bottom-bar">
          <span className="prepare-meal-text10">
            <span>Email:</span>
            <br></br>
            <span>white.dressing@coomer.com</span>
            <br></br>
            <br></br>
            <span>Phone number:</span>
            <br></br>
            <span>403-1111-2222</span>
          </span>
          <span className="prepare-meal-text19">Contacts</span>
          <span className="prepare-meal-text20">Account</span>
          <span className="prepare-meal-text21">
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
          <div className="prepare-meal-company-logo1">
            <img
              src="/external/imageremovebgpreview1i431-6zq-400h.png"
              alt="imageremovebgpreview1I431"
              className="prepare-meal-imageremovebgpreview11"
            />
          </div>
          <img
            src="/external/socialmedialogo4316-avid-200h.png"
            alt="SocialMediaLogo4316"
            className="prepare-meal-social-media-logo"
          />
          <span className="prepare-meal-text32">
            @WhiteDressing Privacy Policy AI Agreement Terms and Conditions
          </span>
        </div>
        <div className="prepare-meal-design">
          <img
            src="/external/ellipse94317-zdnk-1600h.png"
            alt="Ellipse94317"
            className="prepare-meal-ellipse9"
          />
          <img
            src="/external/ellipse14317-ksvuq-1500h.png"
            alt="Ellipse14317"
            className="prepare-meal-ellipse1"
          />
          <img
            src="/external/ellipse24317-hlkx-700h.png"
            alt="Ellipse24317"
            className="prepare-meal-ellipse2"
          />
          <img
            src="/external/ellipse34317-kqb9-300h.png"
            alt="Ellipse34317"
            className="prepare-meal-ellipse3"
          />
          <img
            src="/external/ellipse44318-wmr-200h.png"
            alt="Ellipse44318"
            className="prepare-meal-ellipse4"
          />
          <img
            src="/external/ellipse74318-a4yw-200h.png"
            alt="Ellipse74318"
            className="prepare-meal-ellipse7"
          />
          <img
            src="/external/ellipse64318-9tnq-200h.png"
            alt="Ellipse64318"
            className="prepare-meal-ellipse6"
          />
        </div>
        <img
          src="/external/rectangle24320-seef.svg"
          alt="Rectangle24320"
          className="prepare-meal-rectangle2"
        />
        
        <img
          src="/external/rectangle46022-2gcb.svg"
          alt="Rectangle46022"
          className="prepare-meal-rectangle4"
        />

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="prepare-meal-input-rectangle4"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
          {!isGuest && (
            <button type="submit" className="send-email-button">
              <img
                src="/external/signup5818-3wp5-200h.png"
                alt="SignUp5818"
                className="login-sign-up1"
              />
              <span className="send-email-button-text">Send to email</span>
            </button>
          )}
          <img
            src="/external/rectangle34321-ld45.svg"
            alt="Rectangle34321"
            className="prepare-meal-rectangle3"
          />
          <img
            src="/external/rectangle56022-obet.svg"
            alt="Rectangle56022"
            className="prepare-meal-rectangle5"
          />  
             <img
            src="/external/image16022-y60i-800h.png"
            alt="image16022"
            className="prepare-meal-image1"
          />


          
          <div className="prepare-meal-input">
          <span clssName="prepare-meal-input-text">

            {outputText ? outputText : "No recipe generated yet"}
          </span>
     
          </div>



          
          <button type="submit" className="generate-button">
            <img
              src="/external/signup5818-3wp5-200h.png"
              alt="SignUp5818"
              className="login-sign-up1"
            />
            <span className="generate-button-text">Generate</span>
          </button>
          <span className="prepare-meal-text33">
            Enter Your Ingredients Here:
          </span>
        </form>
        
        <span className="prepare-meal-text34">Recipes Made With Magic:</span>

        
        <div className="prepare-meal-navigation-bar">
          <img
            src="/external/rectangle14318-6o78-200h.png"
            alt="Rectangle14318"
            className="prepare-meal-rectangle1"
          />
          <div className="prepare-meal-prepare-meal-button" onClick={() => navigateTo('/prepare-meal')}>
            <div className="prepare-meal-company-logo2">
              <img
                src="/external/imageremovebgpreview1i431-euj-200h.png"
                alt="imageremovebgpreview1I431"
                className="prepare-meal-imageremovebgpreview12"
              />
              <span className="prepare-meal-text35">White Dressing</span>
            </div>
            <img
              src="/external/preparemeal4319-9bg-200h.png"
              alt="PrepareMeal4319"
              className="prepare-meal-prepare-meal2"
            />
            <span className="prepare-meal-text36">Prepare Meal</span>
          </div>
          <div className="prepare-meal-signup-button1" onClick={() => navigateTo('/')}>
            <img
              src="/external/signup4319-puua-200h.png"
              alt="SignUp4319"
              className="prepare-meal-sign-up1"
            />
            <span className="prepare-meal-text37">Sign out</span>
          </div>
          <div className="prepare-meal-signup-button2" onClick={() => navigateTo('/')}>
            <img
              src="/external/signup6030-uw0j-200h.png"
              alt="SignUp6030"
              className="prepare-meal-sign-up2"
            />
            <span className="prepare-meal-text38">Sign out</span>
          </div>
          <div className="prepare-meal-home-button" onClick={() => navigateTo('/home-page2')}>
            <img
              src="/external/home4320-bkcg-200h.png"
              alt="Home4320"
              className="prepare-meal-home"
            />
            <span className="prepare-meal-text39">Home</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrepareMeal
