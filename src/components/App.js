import React, { Component } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { connect } from 'react-redux'

//partials
import Navbar from './partials/Navbar'
import Home from './partials/Home'
import About from './partials/About'


class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route path="/about" component={ About }/>
          <Route path="/" component={ Home }/>
        </Switch>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return{
    text: state.text
  }
}

const mapDispatchToProps = dispatch => {
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)