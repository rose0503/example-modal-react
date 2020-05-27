import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button>Open modal</button>
          </p>
        
        </header>
        <Modal />
      </div>
    );
  }
}

export default App;
