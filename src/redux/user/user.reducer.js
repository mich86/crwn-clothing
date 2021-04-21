//function that gets 2 props - state, action

//redux needs to know the initial state on first load
const INITIAL_STATE = {
  currentUser: null
}

//ES6 means state can be assigned the initial state
const userReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'SET_CURRENT_USER':
    return {
      ...state,
      currentUser: action.payload
    }
  
    default:
    return state;
  }
}

export default userReducer;