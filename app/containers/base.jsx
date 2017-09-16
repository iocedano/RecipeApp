import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Nav from '../components/Nav';


class Base extends Component {

  render () {
    return (
      <div className="base-container">
        <header>
          <Nav />
        </header>
        <main role="main">
          {this.props.children}
        </main>
        <footer>
          footer
        </footer>
      </div>
    )
  }
}

Base.propTypes = {
  children: PropTypes.element.isRequired
};

export default Base;
