export const publicKeys = (state = [], action) => {
  const newState = Object.assign([], state);
  switch (action.type) {
    case 'RECEIVE_PUBLIC_KEY':
      return [
        ...state,
        {
          id: action.publicKey.id,
          comment: action.username,
          sshKey: action.publicKey.key
        }
      ];
    case 'DELETE_PUBLIC_KEY':
      return state.filter((e) => {
        return e.id !== action.publicKeyId
      });
    default:
      return state;
  }
}

export const publicKeysUI = (state = { username: '', inputDisabled: false }, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'UPDATE_USERNAME':
      newState.username = action.username;
      return newState;
    case 'REQUEST_PUBLIC_KEY':
      newState.inputDisabled = true;
      return newState;
    case 'RECEIVE_PUBLIC_KEY':
      newState.username = '';
      newState.inputDisabled = false;
      return newState;
    default:
      return state;
  }
}
