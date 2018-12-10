import React, { Component } from 'react';
// import logo from './../../../public/imagaes/bongga.jpg';
import './nav-bar.css';

class NavBar extends Component {  
  render() {
    return (
        <div className="navBar">
          <img src="/images/bongga.jpg" className="navBar-logo" alt="logo" />
          <div className="navBar-text">Bongga</div>
        </div>
    );
  }
}

export default NavBar;
