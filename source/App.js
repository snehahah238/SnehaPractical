
import React, { Component } from "react";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import loginReducer from './reducers';

import Routes from './route';

const createtoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createtoreWithMiddleware(loginReducer);

export default class App extends Component {
  render() {
    return (
    <Provider store={store}>
      <Routes />
    </Provider>
    );
  }
}