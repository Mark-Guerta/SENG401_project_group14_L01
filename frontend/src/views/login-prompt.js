import React from 'react'

import { Helmet } from 'react-helmet'

import './login-prompt.css'

const LoginPrompt = (props) => {
  return (
    <div className="login-prompt-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="login-prompt-login-prompt">
        <div className="login-prompt-design">
          <img
            src="/external/ellipse95812-jq6-1600h.png"
            alt="Ellipse95812"
            className="login-prompt-ellipse9"
          />
          <img
            src="/external/ellipse15813-74sm-1500h.png"
            alt="Ellipse15813"
            className="login-prompt-ellipse1"
          />
          <img
            src="/external/ellipse25813-ieba-700w.png"
            alt="Ellipse25813"
            className="login-prompt-ellipse2"
          />
          <img
            src="/external/ellipse35813-p0kb-300h.png"
            alt="Ellipse35813"
            className="login-prompt-ellipse3"
          />
          <img
            src="/external/ellipse45813-39oi-200h.png"
            alt="Ellipse45813"
            className="login-prompt-ellipse4"
          />
          <img
            src="/external/ellipse75813-7yy-200h.png"
            alt="Ellipse75813"
            className="login-prompt-ellipse7"
          />
          <img
            src="/external/ellipse65813-qu6c-200h.png"
            alt="Ellipse65813"
            className="login-prompt-ellipse6"
          />
        </div>
        <img
          src="/external/rectangle85817-2prl-400w.png"
          alt="Rectangle85817"
          className="login-prompt-rectangle8"
        />
        <span className="login-prompt-text">
          You have to Login/Register or Continue as Guest to Proceed
        </span>
        <img
          src="/external/rectangle95818-9jgs-200h.png"
          alt="Rectangle95818"
          className="login-prompt-rectangle9"
        />
      </div>
    </div>
  )
}

export default LoginPrompt
