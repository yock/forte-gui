import React, { PropTypes } from 'react';
import PublicKey from './public_key';

const PublicKeyList = ({ publicKeys }) => (
  <ul className="publickeylist">
    {publicKeys.map(publicKey =>
      <PublicKey key={publicKey.id} comment={publicKey.comment} sshKey={publicKey.sshKey} />
    )}
  </ul>
)

PublicKeyList.propTypes = {
  publicKeys: PropTypes.arrayOf(PropTypes.shape({
    comment: PropTypes.string.isRequired,
    sshKey: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default PublicKeyList;
