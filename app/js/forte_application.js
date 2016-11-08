import React, { Component } from 'react';
import Navigation from './navigation';

class ForteApplication extends Component {
  render() {
    return (
      <div>
        <Navigation />
        {this.props.children}
      </div>
    )
  }
}

export default ForteApplication;
