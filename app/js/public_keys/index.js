import React, { Component } from 'react';
import ConnectedPublicKeyList from './connected_public_key_list';
import ConnectedPublicKeyForm from './connected_public_key_form';

class PublicKeys extends Component {
  render() {
    return (
      <div>
        <ConnectedPublicKeyForm />
        <ConnectedPublicKeyList />
      </div>
    )
  }
}

export default PublicKeys;
