import React from 'react';
import AvailablePublicKeyList from './public_keys/available_public_key_list';
import PublicKeyForm from './public_keys/public_key_form';

const ForteApplication = () => (
  <div>
    <PublicKeyForm />
    <AvailablePublicKeyList />
  </div>
)

export default ForteApplication
