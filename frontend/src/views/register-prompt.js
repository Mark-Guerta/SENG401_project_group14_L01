import React from 'react'

import { Helmet } from 'react-helmet'

import './register-prompt.css'

const RegisterPrompt = (props) => {
  return (
    <div className="register-prompt-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="register-prompt-register-prompt">
        <div className="register-prompt-design">
          <img
            src="/external/ellipse95818-3zzq-1600h.png"
            alt="Ellipse95818"
            className="register-prompt-ellipse9"
          />
          <img
            src="/external/ellipse15818-1hao-1500h.png"
            alt="Ellipse15818"
            className="register-prompt-ellipse1"
          />
          <img
            src="/external/ellipse25819-j9u-700w.png"
            alt="Ellipse25819"
            className="register-prompt-ellipse2"
          />
          <img
            src="/external/ellipse35819-481-300h.png"
            alt="Ellipse35819"
            className="register-prompt-ellipse3"
          />
          <img
            src="/external/ellipse45819-q76-200h.png"
            alt="Ellipse45819"
            className="register-prompt-ellipse4"
          />
          <img
            src="/external/ellipse75819-bpig-200h.png"
            alt="Ellipse75819"
            className="register-prompt-ellipse7"
          />
          <img
            src="/external/ellipse65819-cgk-200h.png"
            alt="Ellipse65819"
            className="register-prompt-ellipse6"
          />
        </div>
        <img
          src="/external/rectangle85819-47fl-400w.png"
          alt="Rectangle85819"
          className="register-prompt-rectangle8"
        />
        <span className="register-prompt-text">
          You have to Login/Register or Continue as Guest to Proceed
        </span>
        <img
          src="/external/rectangle95819-yuz6-200h.png"
          alt="Rectangle95819"
          className="register-prompt-rectangle9"
        />
      </div>
    </div>
  )
}

export default RegisterPrompt
