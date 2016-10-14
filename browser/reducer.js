

var initialState = {
  allPuppies: []
}



export default function reducer (state = initialState, action ) {
  switch (action.type) {
    case 'RECEIVE_PUPPIES':
      return Object.assign({}, state, {allPuppies: action.receivedPuppies});
    default:
      return state;
  }
}
