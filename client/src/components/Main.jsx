import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from './Homepage/Homepage';
import Login from './Login/Login';
import Signup from './Signup';
import Store from './Store/Store';

class Main extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/home">
            <Homepage />
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
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect()(Main));
