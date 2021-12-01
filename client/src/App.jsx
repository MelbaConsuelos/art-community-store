import './App.scss';
import { BrowserRouter } from 'react-router-dom';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import throttle from 'lodash/throttle';
import Main from './components/Main';
import store from './store';
import { loadState, saveState } from './localStorage';

class App extends React.Component {
  render() {
    store.subscribe(throttle(() => {
      saveState({
        cart: store.getState().cart,
      });
    }, 1000));
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
