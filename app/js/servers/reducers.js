export const servers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SERVER':
      return [
        ...state,
        {
          id: Date.now(),
          hostname: action.hostname,
          username: action.username
        }
      ]
    case 'DELETE_SERVER':
      return state.filter((server) => {
        return server.id !== action.serverId;
      });
    default:
      return state;
  }
}

export const serversUI = (state = { hostname: '', username: '' }, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case 'ADD_SERVER':
      newState.hostname = '';
      newState.username = '';
      return newState;
    case 'UPDATE_HOSTNAME':
      newState.hostname = action.hostname;
      return newState;
    case 'UPDATE_USERNAME':
      newState.username = action.username;
      return newState;
    default:
      return state;
  }
}
