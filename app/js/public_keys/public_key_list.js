import React, { Component, PropTypes } from 'react';
import PublicKey from './public_key';

class PublicKeyList extends Component {
  render() {
    return (
      <ul className="publickeylist">
        {this.props.publicKeys.map(publicKey =>
          <PublicKey key={publicKey.id} id={publicKey.id} comment={publicKey.comment} sshKey={publicKey.sshKey} deleteHandler={this.props.onDeleteClick} />
        )}
      </ul>
    )
  }
}

PublicKeyList.propTypes = {
  publicKeys: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string.isRequired,
    sshKey: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default PublicKeyList;
