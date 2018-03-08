export function manageFriends(state, action){
  switch (action.type) {
    case 'ADD_FRIEND':
      return Object.assign({}, state, {
        friends: [
          ...state.friends, action.friend
        ]
      })
    case 'REMOVE_FRIEND':
      const i = state.friends.findIndex(f => f.id === action.id)
      return Object.assign({}, state, {
        friends: [
          ...state.friends.slice(0, i),
          ...state.friends.slice(i + 1)
        ]
      })
    default:
      return state;
  }
}
