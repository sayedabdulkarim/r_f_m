import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'

import reducer from './reducers/reducer'

import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));

// const store = createStore(reducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

import App from './components/App.js'

ReactDOM.render(<Provider store={ store }><App /></Provider>, document.getElementById('app'))