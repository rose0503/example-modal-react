import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal.js'

class App extends Component {
  constructor(){
    super();
    
    this.state = {
      isDisplay: false
    }
    this.onClickBtn = this.onClickBtn.bind(this);
    this.onHide = this.onHide.bind(this);
  }

  onClickBtn(){
    this.setState({
      isDisplay: true
    })
  }

  onHide(){
    this.setState({
      isDisplay: false
    })
    console.log("onhide", this.state.isDisplay)
  }

  render() {
    const { isDisplay, onHide } = this.state;
    console.log(isDisplay)
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <button id="btnOpen" onClick={this.onClickBtn}>Open modal</button>
          </p>
          <Modal isDisplay ={isDisplay} onHide={this.onHide}/>
        </header>
        
      </div>
    );
  }
}

export default App;
