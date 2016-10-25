import React from 'react';
import Github from './github';
import PublicKeyTransform from './public_key_transform';
import { connect } from 'react-redux'

const addPublicKey = (username) => {
  return {
    type: 'Add_PUBLIC_KEY',
    username: username
  }
}

const requestPublicKey = (username) => {
  return {
    type: 'REQUEST_PUBLIC_KEY',
    username: username
  }
}

const receivePublicKey = (username, json) => {
  return {
    type: 'RECEIVE_PUBLIC_KEY',
    username: username,
    publicKey: json
  }
}

const fetchPublicKey = (username) => {
  return function(dispatch) {
    dispatch(requestPublicKey(username));
    const githubPath = `users/${username}/keys`;
    return Github.get(githubPath).then((keys) => {
      dispatch(receivePublicKey(username, keys[0]));
    });
  }
}

let PublicKeyForm = ({ dispatch }) => {
  let input;
  return (
    <div className="publickeyform">
      <form
        onSubmit={ e => {
          e.preventDefault();
          dispatch(fetchPublicKey(input.value));
          input.value = '';
      }}>
        <input
          type="text"
          ref={(node) => {
            input = node;
          }}
          placeholder="Enter a Github username"
          className="publickeyform__input"
        />
        <input
          type="submit"
          value="add"
          className="publickeyform__retrieve"
        />
      </form>
    </div>
  )
}

PublicKeyForm = connect()(PublicKeyForm);

export default PublicKeyForm;
