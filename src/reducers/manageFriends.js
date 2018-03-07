export function manageFriends(state, action){
  switch (action.type) {
    case "ADD_FRIEND":
      return {friends: [...state.friends, action.friend]}
      break;
    case "REMOVE_FRIEND":
      let oldFriends = [...state.friends]
      let filteredFriends = oldFriends.filter(currentFriend => currentFriend.id !== action.id)
      return {friends: filteredFriends}
      break;
    default:
      return state
  }
}
