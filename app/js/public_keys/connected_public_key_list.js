import React from 'react';
import { connect } from 'react-redux';
import PublicKeyList from './public_key_list';

const deletePublicKey = (id) => {
  return {
    type: 'DELETE_PUBLIC_KEY',
    publicKeyId: id
  }
}

const mapStateToProps = (state) => {
  return {
    publicKeys: state.publicKeys
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteClick(id) {
      return dispatch(deletePublicKey(id));
    }
  }
}

const ConnectedPublicKeyList = connect(
  mapStateToProps,
  mapDispatchToProps
)(PublicKeyList);

export default ConnectedPublicKeyList;
