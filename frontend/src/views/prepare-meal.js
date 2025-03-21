import React, { useState, useEffect } from 'react'
import './prepare-meal.css'
import NavBar from './nav-bar'
import Footer from './footer'
import speakText from './TTS';

const PrepareMeal = () => {
  const [option, setOption] = useState(localStorage.getItem("option") === "true");

  const [outputText, setOutputText] = useState('');
  const [outputTextRAW, setOutputTextRAW] = useState('');
  const [inputText, setInputText] = useState('');
  const [outputTextLocationRAW, setOutputTextLocationRAW] = useState('');
  const [outputTextLocation, setOutputTextLocation] = useState('');
  const [isGuest, setIsGuest] = useState(true);
  const [error, setError] = useState('');
  const [location, setLocation] = useState('');
  const [lactoseFree, setLactoseFree] = useState(false);
  const [glutenFree, setGlutenFree] = useState(false);
  const [vegetarian, setVegetarian] = useState(false);
  const [vegan, setVegan] = useState(false);
  const [halal, setHalal] = useState(false);
  const [kosher, setKosher] = useState(false);
  const [diabetic, setDiabetic] = useState(false);

  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');

  const [highProtein, setHighProtein] = useState(false);
  const [highCarbs, setHighCarbs] = useState(false);
  const [highFats, setHighFats] = useState(false);
  const [customPreference, setCustomPreference] = useState('');

  const formatOutputText = (outputText) => {
    if (!outputText || typeof outputText !== 'object') return "";
  
    const { recipe_name, ingredients, steps } = outputText;
  
    return (
      <div>
        <h2>{recipe_name}</h2>
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
        <h3>Steps:</h3>
        <ol>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    );
  };

  const formatOutputLocation = (outputText) => {
    if (!outputText || typeof outputText !== 'object') return "";

    const { Locations } = outputText;

    return (
      <div>
        <h3>Locations:</h3>
        <ul>
          {Locations.map((location, index) => (
            <li key={index}>
              <strong>{location.location_name}</strong>: {location.address}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  useEffect(() => {
    const guestStatus = localStorage.getItem("isGuest");
    setIsGuest(guestStatus === "true"); 
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputText) {
      setError('Please enter your ingredients');
    } else {
      const requestData = {
        ingredients: inputText,
        lactoseFree: lactoseFree,
        glutenFree: glutenFree,
        vegetarian: vegetarian,
        vegan: vegan,
        halal: halal,
        kosher: kosher,
        diabetic: diabetic,
        height: height,
        weight: weight,
        highProtein: highProtein,
        highCarbs: highCarbs,
        highFats: highFats,
        customPreference: customPreference,
        location: location
      };

      fetch("http://127.0.0.1:5000/prepare-meal", {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then((response) => response.json())
        .then((data) => {
          const recipe = data.recipe;
          setOutputTextRAW(recipe)
          const local = data.local;
          setOutputTextLocationRAW(local)
          setError("Generation Successful");
          setOutputText(formatOutputText(recipe)); 
          setOutputTextLocation(formatOutputLocation(local));
        })
        .catch((error) => {
          setError("An error occurred while generating the meal.");
        });
    }
  };

  const handleMoreOptions = () => {
    setOption(true);
    localStorage.setItem("option", "true");
  };

  const handleLessOptions = () => {
    setOption(false);
    localStorage.removeItem("option");
  };

  return (
    <div>
      <div className="prepare-meal-container">
        <NavBar />
        
        <span className="prepare-meal-text33"></span>
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
              {option ? (
                <>
                  <div className="diet-restrictions-box">
                    <h3>Diet Restrictions:</h3>
                    <div className="checkbox-list">
                      <label><input type="checkbox" checked={lactoseFree} onChange={(e) => setLactoseFree(e.target.checked)} /> Lactose Free</label>
                      <label><input type="checkbox" checked={glutenFree} onChange={(e) => setGlutenFree(e.target.checked)} /> Gluten Free</label>
                      <label><input type="checkbox" checked={vegetarian} onChange={(e) => setVegetarian(e.target.checked)} /> Vegetarian</label>
                      <label><input type="checkbox" checked={vegan} onChange={(e) => setVegan(e.target.checked)} /> Vegan</label>
                      <label><input type="checkbox" checked={halal} onChange={(e) => setHalal(e.target.checked)} /> Halal</label>
                      <label><input type="checkbox" checked={kosher} onChange={(e) => setKosher(e.target.checked)} /> Kosher</label>
                      <label><input type="checkbox" checked={diabetic} onChange={(e) => setDiabetic(e.target.checked)} /> Diabetic</label>
                    </div>
                  </div>

                  <div className="height-weight-preferences">
                    <div className="height-box">
                      <h3>Height:</h3>
                      <select className="height-dropdown" onChange={(e) => setHeight(e.target.value)} defaultValue="">
                        <option value="" disabled>Select Height Range</option>
                        <option value="150-159cm">150-159 cm</option>
                        <option value="160-169cm">160-169 cm</option>
                        <option value="170-179cm">170-179 cm</option>
                        <option value="180-189cm">180-189 cm</option>
                        <option value="190-199cm">190-199 cm</option>
                        <option value="200+cm">200 cm and above</option>
                      </select>
                    </div>

                    <div className="weight-box">
                      <h3>Weight:</h3>
                      <select className="weight-dropdown" onChange={(e) => setWeight(e.target.value)} defaultValue="">
                        <option value="" disabled>Select Weight Range</option>
                        <option value="50-54kg">50-54 kg</option>
                        <option value="55-59kg">55-59 kg</option>
                        <option value="60-64kg">60-64 kg</option>
                        <option value="65-69kg">65-69 kg</option>
                        <option value="70-74kg">70-74 kg</option>
                        <option value="75-79kg">75-79 kg</option>
                        <option value="80-84kg">80-84 kg</option>
                        <option value="85-89kg">85-89 kg</option>
                        <option value="90-99kg">90-99 kg</option>
                        <option value="100+kg">100 kg and above</option>
                      </select>
                    </div>

                    <div className="preferences-box">
                      <h3>Preferences:</h3>
                      <div className="checkbox-list">
                        <label><input type="checkbox" checked={highProtein} onChange={(e) => setHighProtein(e.target.checked)} /> High Protein</label>
                        <label><input type="checkbox" checked={highCarbs} onChange={(e) => setHighCarbs(e.target.checked)} /> High Carbs</label>
                        <label><input type="checkbox" checked={highFats} onChange={(e) => setHighFats(e.target.checked)} /> High Fats</label>
                      </div>
                    </div>

                    <div className="height-box">
                      <h3>Other:</h3>
                      <input type="text" className="other-input" placeholder="Enter custom preference" value={customPreference} onChange={(e) => setCustomPreference(e.target.value)} />
                    </div>
                    <div className="location-box">
                      <h3>Enter Location:</h3>
                      <input 
                        type="text" 
                        className="location-input" 
                        placeholder="e.g. University of Calgary" 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                      />
                    </div>
                    <button className="option-button" type="button" onClick={handleLessOptions}>Less Options</button>
                  </div>
                </>
              ) : (
                <button className="option-button" type="button" onClick={handleMoreOptions}>More Options</button>
              )}
            </div>

            <br />
            <button type="submit" className="generate-button">
              <span className="generate-button-text">Generate</span>
            </button>

            <div className="side-by-side-boxes">
              <div className="main-result-box">
                <h2 className="prepare-meal-text34">🍳 Recipe 🍳</h2>
                <br />
                <div className="prepare-meal-input">
                  <div className="prepare-meal-input-text">
                    {outputText}
                  </div>
                  {outputText && (
                  <button className="tts-button" type="button" onClick={() => speakText(outputTextRAW)}>
                    🔊 Read Recipe
                  </button>
                  )}
                </div>
              </div>
              {outputTextLocation && (
                <div className="right-side-container">
                  <h3 className="location-title">Ingredients Finder 🍔</h3>
                  <div className="location-output-box">
                    <div className="output-content">{outputTextLocation}</div>
                    <button className="tts-button" type="button" onClick={() => speakText(outputTextLocationRAW)}>
                    🔊 Read Location
                    </button>
                  </div>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrepareMeal;
