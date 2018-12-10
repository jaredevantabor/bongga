import React, { Component } from 'react';

import logo from './bongga.jpg';
import './app.css';

class NavBar extends Component {  
  render() {
    return (
        <div className="navBar">
          <img src={logo} className="navBar-logo" alt="logo" />
          <div className="navBar-text">Bongga</div>
        </div>
    );
  }
}

export default NavBar;
