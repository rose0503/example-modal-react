import React, { Component } from "react";

class Modal extends Component {
  render() {
    return (
      <div className="Modal">
        <h1>This is a modal 1</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. 
        </p>
        <div className="groupButton">
          <button>Accept</button>
          <button>Decline</button>
        </div>
      </div>
    );
  }
}

export default Modal;
