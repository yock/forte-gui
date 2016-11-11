import React from 'react';
import { connect } from 'react-redux';
import ServerList from './server_list';

const deleteServer = (id) => {
  return {
    type: 'DELETE_SERVER',
    serverId: id
  }
}

const mapStateToProps = (state) => {
  return {
    servers: state.servers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick(id) {
      return dispatch(deleteServer(id));
    }
  }
}

const ConnectedServerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerList);

export default ConnectedServerList;
