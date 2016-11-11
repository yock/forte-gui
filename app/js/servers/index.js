import React, { Component } from 'react';
import ConnectedServerForm from './connected_server_form';
import ConnectedServerList from './connected_server_list';

class Servers extends Component {
  render() {
    return (
      <div>
        <ConnectedServerForm />
        <ConnectedServerList />
      </div>
    )
  }
}

export default Servers;
