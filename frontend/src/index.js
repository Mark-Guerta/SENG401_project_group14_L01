import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import HomePage from './views/home-page'
import Login from './views/login'
import Register from './views/register'
import PrepareMeal from './views/prepare-meal'
import HomePage2 from './views/home-page2'
import Home1Prompt from './views/home1-prompt'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={HomePage} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Register} exact path="/register" />
        <Route component={PrepareMeal} exact path="/prepare-meal" />
        <Route component={HomePage2} exact path="/home-page2" />
        <Route component={Home1Prompt} exact path="/home1-prompt" />
       
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
