import React, { Component } from 'react';
import Server from './server';

class ServerList extends Component {
  render() {
    return (
      <ul className="serverlist">
        {this.props.servers.map(server =>
          <Server key={server.id} id={server.id} hostname={server.hostname} username={server.username} deleteHandler={this.props.onDeleteClick}/>
        )}
      </ul>
    )
  }
}

export default ServerList;
