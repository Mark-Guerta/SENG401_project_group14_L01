/*
import { useState } from "react";
import "./VoiceInputComponent.css";

const VoiceInputComponent = ({ onTextChange }) => {
  const [inputText, setInputText] = useState("");


  const handleVoiceInput = () => {
    if (!window.webkitSpeechRecognition) {
      alert("Your browser does not support Speech Recognition.");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "en-US"; // Set language
    recognition.continuous = false; // Stops after one sentence
    recognition.interimResults = false; // Get only the final text

    recognition.onstart = () => {
      console.log("Voice recognition started...");
    };

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      setInputText(spokenText);
      if (onTextChange) {
        onTextChange(spokenText); // Pass spoken text to parent component
      }
    };

    recognition.onerror = (event) => {
      console.error("Speech recognition error:", event.error);
    };

    recognition.start();
  };

  return (
    <div className="voice-input-container">
      <h3>Enter Your Ingredients:</h3>
      <div className="input-with-mic">
        <input
          type="text"
          className="ingredient-input"
          placeholder="Speak or type your ingredients..."
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            if (onTextChange) {
              onTextChange(e.target.value);
            }
          }}
        />
        <button className="mic-button" onClick={handleVoiceInput}>
          🎤
        </button>
      </div>
    </div>
  );
};

export default VoiceInputComponent;

