export function manageFriends(state={friends:[]}, action) {
  
  switch (action.type) {
    case "friends/add":
      const friend = {name:action.payload.name, hometown: action.payload.hometown, id:action.payload.id}
      return {friends: [...state.friends, friend]}
    case "friends/remove":
      return {friends: state.friends.filter(f=> f.id !== action.payload)}
    default:
      return state
  }
}
