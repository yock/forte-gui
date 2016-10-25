import React, { Component } from 'react';
import fingerprint from 'ssh-fingerprint';
import store from 'store';

const PublicKey = ({comment, sshKey}) => (
  <li className="publickey">
    <span className="publickey__comment">{comment}</span>
    <span className="publickey__fingerprint">{fingerprint(sshKey)}</span>
    <span className="publickey__delete">&times;</span>
  </li>
)

export default PublicKey;
