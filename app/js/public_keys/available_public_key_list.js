import { connect } from 'react-redux';
import PublicKeyList from './public_key_list';

const getAvailablePublicKeys = (publicKeys) => {
  return publicKeys;
}

const mapStateToProps = (state) => {
  return {
    publicKeys: getAvailablePublicKeys(state.publicKeys)
  }
}

const AvailablePublicKeyList = connect(
  mapStateToProps,
  null
)(PublicKeyList);

export default AvailablePublicKeyList;
