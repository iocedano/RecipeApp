import React, { Component } from 'react';

import Nav from '../components/Nav.jsx'


class Base extends Component {
  constructor(props) {
    super(props);
  }

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

export default Base;
