import React, { Component } from 'react';
import { Link } from 'react-router';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><Link to="/">Automation</Link></li>
          <li><Link to="/keys">Keys</Link></li>
          <li><Link to="/servers">Servers</Link></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation;
