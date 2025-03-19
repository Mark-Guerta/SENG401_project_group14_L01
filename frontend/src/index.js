import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'

import Login from './views/login'
import Register from './views/register'
import PrepareMeal from './views/prepare-meal'
import Profile from './views/profile-page'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Login} exact path="/" />
        <Route component={Login} exact path="/login" />
        <Route component={Register} exact path="/register" />
        <Route component={Profile} exact path="/profile-page" />
        <Route component={PrepareMeal} exact path="/prepare-meal" />
        <Route component={Login} exact path="/home-page2" />
       
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
