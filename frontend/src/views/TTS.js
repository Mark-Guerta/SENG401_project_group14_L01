let isSpeaking = false;

const speakText = (text, onStart, onEnd) => {
  if (!("speechSynthesis" in window)) {
    alert("Text-to-Speech not supported in your browser.");
    return;
  }

  if (isSpeaking) {
    window.speechSynthesis.cancel();
    isSpeaking = false;
    if (onEnd) onEnd();
    return;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.volume = 1;

  isSpeaking = true;
  if (onStart) onStart();

  utterance.onend = () => {
    isSpeaking = false;
    if (onEnd) onEnd();
  };

  window.speechSynthesis.speak(utterance);
};

export default speakText;