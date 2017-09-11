import React, { Component } from 'react';

import Base from './base.jsx';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Base>
        <div className="home-container"><h1>Home</h1></div>
      </Base>
    );
  }
}

export default Home;
