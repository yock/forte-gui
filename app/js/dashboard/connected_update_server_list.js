import React from 'react';
import { connect } from 'react-redux';
import UpdateServerList from './update_server_list';

const mapStateToProps = (state) => {
  return {
    servers: state.servers
  }
}

export default const ConnectedUpdateServerList = connect(
  mapStateToProps
)(UpdateServerList);
