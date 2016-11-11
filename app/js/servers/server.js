import React, { Component } from 'react';

class Server extends Component {
  render() {
    return (
      <li className="server listitem">
        <span className="server__hostname">{this.props.hostname}</span>
        <span className="server__username">{this.props.username}</span>
        <span
          className="publickey__delete"
          onClick={ (e) => {
            e.preventDefault();
            this.props.deleteHandler(this.props.id);
          }}>&times;</span>
      </li>
    )
  }
}

export default Server;
