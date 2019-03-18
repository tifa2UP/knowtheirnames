import React, { Component } from 'react';
import { Provider } from 'react-redux';

import HomePage from './pages/HomePage';
import { configStore } from './redux'

import './App.css';

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <HomePage />
        </div>
      </Provider>
    );
  }
}

export default App;
