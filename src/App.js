import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import Opportunities from './pages/Opportunities'
import Students from './pages/Students'
import Navbar from './navbar.js' 
import Notfoundpage from './pages/notfoundpage'
import Employers from './pages/Employers'

class App extends Component {
  render() {
    return (
      <>
      <Router>
        <div className = "App">
          <Navbar bg = "dark" />
          <div id = "page-body" >
            <Switch>
              <Route path = "/" component = {Opportunities} exact />
              <Route path = "/students" component = {Students} />
              <Route path = "/employers" component = {Employers} />
              <Route component = {Notfoundpage} />
            </Switch>
          </div>
        </div>
      </Router>
      <div id = "status">
        <p>
          <span id = "note" > NOTE </span>
          Currently in the process of acquiring data and interested responses ...
        </p>
      </div>
      </>
    )
  }
}

export default App
