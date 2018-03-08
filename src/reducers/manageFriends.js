export function manageFriends(state, action){
  switch(action.type){
    case 'ADD_FRIEND':
      return { friends: [...state.friends, action.friend] }
    case 'REMOVE_FRIEND':
      let newFriends = state.friends.filter(friend => friend.id !== action.id)
      return { friends: newFriends}
      default:
        return state;
  }
}


// animals.slice(2)

// let newFriends = state.friends.filter(f => f.id !== action.id);
// +      return { friends: newFriends };
