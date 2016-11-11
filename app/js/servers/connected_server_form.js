import React from 'react';
import { connect } from 'react-redux';
import ServerForm from './server_form';

const updateHostname = (hostname) => {
  return {
    type: 'UPDATE_HOSTNAME',
    hostname: hostname
  }
}

const updateUsername = (username) => {
  return {
    type: 'UPDATE_USERNAME',
    username: username
  }
}

const mapStateToProps = (state) => {
  return {
    servers: state.servers,
    hostname: state.serversUI.hostname,
    username: state.serversUI.username,
    inputsDisabled: state.serversUI.inputsDisabled
  }
}

const addServer = (hostname, username) => {
  return {
    type: 'ADD_SERVER',
    hostname: hostname,
    username: username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onHostnameChange(hostname) {
      return dispatch(updateHostname(hostname));
    },
    onUsernameChange(username) {
      return dispatch(updateUsername(username));
    },
    onFormSubmit(properties) {
      return dispatch(addServer(properties.hostname, properties.username));
    }
  }
}

const ConnectedServerForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerForm);

export default ConnectedServerForm;
