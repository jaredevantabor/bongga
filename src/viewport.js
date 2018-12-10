import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.css';
import { strings } from './strings';

const propTypes = { 
    page: PropTypes.string,
};

class Viewport extends Component {
    render() {
    const { page } = this.props;
    return (
      <div className="viewport">
        {strings[[page]] }
      </div>
    );
  }
}
Viewport.propTypes = propTypes;

export default Viewport;
