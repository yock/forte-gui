import React, { Component } from 'react';
import CredentialedServer from './credentialed_server';

export default class UpdateServerList extends Component {
  render() {
    <ul className="updateserverlist">
      {this.props.servers.map(server =>
        <CredentialedServer key={server.id} id={server.id} hostname={server.hostname} lastCredentialed={server.lastCredentialed}
      )}
    </ul>
  }
}
