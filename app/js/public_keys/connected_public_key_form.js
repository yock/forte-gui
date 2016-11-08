import React from 'react';
import { connect } from 'react-redux'
import PublicKeyForm from './public_key_form';
import Github from './github';

const requestPublicKey = (username) => {
  return {
    type: 'REQUEST_PUBLIC_KEY'
  }
}

const receivePublicKey = (username, json) => {
  return {
    type: 'RECEIVE_PUBLIC_KEY',
    username: username,
    publicKey: json
  }
}

const updateUsername = (username) => {
  return {
    type: 'UPDATE_USERNAME',
    username: username
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFormSubmit: (username) => {
      dispatch(requestPublicKey());
      const githubPath = `users/${username}/keys`;
      return Github.get(githubPath).then((keys) => {
        return dispatch(receivePublicKey(username, keys[0]));
      });
    },
    onInputChange: (value) => {
      return dispatch(updateUsername(value));
    }
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.publicKeysUI.username,
    inputDisabled: state.publicKeysUI.inputDisabled
  };
}

const ConnectedPublicKeyForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicKeyForm);

export default ConnectedPublicKeyForm;
