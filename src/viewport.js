import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.css';
import Mission from './pages/mission';
import Board from './pages/board';
import Contact from './pages/contact';

const propTypes = { 
    page: PropTypes.string,
};

class Viewport extends Component {
    render() {
    const { page } = this.props;
    return (
      <div className="viewport">
        {page === "mission" && <Mission></Mission>}
        {page === "board" && <Board></Board>}
        {page === "contact" && <Contact></Contact>}
      </div>
    );
  }
}
Viewport.propTypes = propTypes;

export default Viewport;
