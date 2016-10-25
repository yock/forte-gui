const publicKeys = (state = [], action) => {
  switch (action.type) {
    case 'RECEIVE_PUBLIC_KEY':
      return [
        ...state,
        {
          id: action.publicKey.id,
          comment: action.username,
          sshKey: action.publicKey.key
        }
      ]
    default:
      return state
  }
}

export default publicKeys;
