import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import Login from './screens/Login';
import Grocery from './screens/GroceryList';

const Routerapp = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="login"
          hideNavBar={true}
          component={Login}
          initial
        />

        <Scene
          key="grocery"
          hideNavBar={true}
          component={Grocery}
        />


      </Scene>
    </Router>
  );
}

export default Routerapp;