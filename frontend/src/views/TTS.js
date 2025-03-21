let isSpeaking = false;

const speakText = (text) => {
  if (!("speechSynthesis" in window)) {
    alert("Text-to-Speech not supported in your browser.");
    return;
  }

  if (isSpeaking) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  isSpeaking = true;

  utterance.onend = () => {
    isSpeaking = false;
  };

  window.speechSynthesis.speak(utterance);
};

export default speakText;