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
import NavBar from './views/nav-bar'
import Footer from './views/footer'

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
        <Route component={NavBar} exact path="/nav" />
        <Route component={Footer} exact path="/footer" />
       
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
