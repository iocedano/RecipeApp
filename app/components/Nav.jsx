import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav className="navigation">
    <ul>
      <li><Link to="/">Home</Link></li>
    </ul>
  </nav>
);

export default Nav;