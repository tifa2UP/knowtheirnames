import React, { Component } from 'react';
import { Provider } from 'react-redux';

import HomePage from './pages/HomePage';
import Modal from './components/Modal';
import { configStore } from './redux'

import 'font-awesome/css/font-awesome.min.css'
import './App.css';

const store = configStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <HomePage />
          <Modal />
        </div>
      </Provider>
    );
  }
}

export default App;
