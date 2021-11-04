import './App.css';

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Homepage />
      </div>
    );
  }
}

export default App;
