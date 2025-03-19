import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import './prepare-meal.css'
import NavBar from './nav-bar'

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
    <div> <NavBar />
<div className="prepare-meal-container">
  <span className="prepare-meal-text33">Enter Your Ingredients Here:</span>
  <br />

  <div className="prepare-meal-prepare-meal1">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="prepare-meal-input-rectangle4"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />

      <div className="diet-info-box">
        <div className="diet-restrictions-box">
          <h3>Diet Restrictions:</h3>
          <div className="checkbox-list">
            <label><input type="checkbox" name="diet" value="Lactose intolerant" /> Lactose Intolerant</label>
            <label><input type="checkbox" name="diet" value="Vegetarian" /> Vegetarian</label>
            <label><input type="checkbox" name="diet" value="Gluten Free" /> Gluten Free</label>
            <label><input type="checkbox" name="diet" value="Halal" /> Halal</label>
            <label><input type="checkbox" name="diet" value="Kosher" /> Kosher</label>
            <label><input type="checkbox" name="diet" value="Vegan" /> Vegan</label>
          </div>
        </div>

        <div className="height-weight-preferences">
          <div className="height-box">
            <h3>Height:</h3>
            <input type="text" className="height-input" placeholder="Enter your height" />
          </div>

          <div className="weight-box">
            <h3>Weight:</h3>
            <input type="text" className="weight-input" placeholder="Enter your weight" />
          </div>

          <div className="preferences-box">
            <h3>Preferences:</h3>
            <div className="checkbox-list">
              <label><input type="checkbox" name="preference" value="High Protein" /> High Protein</label>
              <label><input type="checkbox" name="preference" value="High Carbs" /> High Carbs</label>
              <label><input type="checkbox" name="preference" value="Low Sugar" /> Low Sugar</label>
              <label><input type="checkbox" name="preference" value="High Sugar" /> High Sugar</label>
            </div>
          </div>
        </div>
      </div>

      <br />
      <button type="submit" className="generate-button">
        <span className="generate-button-text">Generate</span>
      </button>

      <br /><br />

      <div className="side-by-side-boxes">
  <div className="main-result-box">
    <h2 className="prepare-meal-text34">Recipe Made With Magic:</h2>
    <br />
    <div className="prepare-meal-input">
      <span className="prepare-meal-input-text">
        {outputText ? outputText : "No recipe generated yet..."}
      </span>
    </div>
  </div>

  <div className="right-side-container">
    <h3 className="location-title">Enter Location:</h3>
    <div className="location-input-box">
      <input type="text" className="location-input" placeholder="e.g. University of Calgary" />
    </div>

    <h3 className="location-title">Nearest Location of Missing Ingredients:</h3>
    <div className="location-output-box">
      <div className="output-content">
        {outputText ? outputText : "Finding Nearest Locations..."}
      </div>
    </div>

    {!isGuest ? (
      <button type="submit" className="send-email-button">
        <span className="send-email-button-text">Send to Email</span>
      </button>
      ): (
        <></>
      )}
        
  </div> 

</div> 

    </form>
  </div>
</div>
</div>
  )
}

export default PrepareMeal
