import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './app.css';

const propTypes = { 
    onClick: PropTypes.func,
    pages: PropTypes.array,
  };

class SubNavBar extends Component {
  render() {
    const { onClick, pages } = this.props;
    return (
        <div className="subNavBar">
          {pages.map((page, i) => {
              return <div
                key={page[i]} // need to add a key to satisfy React
                className="subNavBarItem" 
                onClick={(event) => onClick(page, page)}
              >
                {page}
              </div>
          })}
        </div>
    );
  }
}
SubNavBar.propTypes = propTypes;

export default SubNavBar;
