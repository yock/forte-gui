import React, { Component } from 'react';
import fingerprint from 'ssh-fingerprint';
import store from 'store';
import { connect } from 'react-redux';

class PublicKey extends Component {
  render() {
    return (
      <li className="publickey">
        <span className="publickey__comment">{this.props.comment}</span>
        <span className="publickey__fingerprint">{fingerprint(this.props.sshKey)}</span>
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

export default PublicKey;
