export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      if(action.friend.name && action.friend.hometown && action.friend.id){
        return { friends: [...state.friends, action.friend]}
      }
    case 'REMOVE_FRIEND':
      let newState = state.friends.filter((friend) => friend.id !== action.id)
      return { friends: newState }
    default:
      return { ...state}
  }
}
