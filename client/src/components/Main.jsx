import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './Homepage/Homepage';
import Login from './Login/Login';
import Signup from './Signup';
import Store from './Store/Store';
import Checkout from './Checkout/Checkout';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/">
            <Store />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/store">
            <Store />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(Main));
