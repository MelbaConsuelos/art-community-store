import './App.css';

import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './Homepage';

class App extends Component {
  render(){
    return ( 
        <div className="App">
          <Homepage/>
        </div> 
    );
  }
}

export default App;
