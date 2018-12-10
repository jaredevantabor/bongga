import React, { Component } from 'react';
import './app.css';
import NavBar from './nav-bar';
import SubNavBar from './sub-nav-bar'
import Viewport from './viewport';

class App extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      page: 'mission',
    }
    this.selectPage = this.selectPage.bind(this);
  };

  selectPage = (page) => {
    this.setState({ page });
  };

  render() {
    const { page } = this.state;
    const pages = ["mission", "board", "contact"]
    return (
      <React.Fragment>
        <NavBar onClick={this.toggle} pages={pages}></NavBar>
        <SubNavBar onClick={this.selectPage} pages={pages}></SubNavBar>
        <Viewport page={page}></Viewport>
      </React.Fragment>
    );
  }
}

export default App;
