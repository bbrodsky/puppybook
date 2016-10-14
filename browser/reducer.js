import { combineReducers } from "redux";
import { RECEIVE_PUPPIES, GET_SINGLE_PUPPY } from "./action-creators.js"



function allPuppiesReducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_PUPPIES:
      return action.receivedPuppies;
    default:
      return state;
  }
}

function singlePuppyReducer (state = {}, action) {
  switch (action.type) {
    case GET_SINGLE_PUPPY:
      return action.singlePuppy;
    default:
      return state;
  }
}

var rootReducer = combineReducers({
  allPuppies: allPuppiesReducer,
  singlePuppy: singlePuppyReducer
})

export default rootReducer;





// export default function reducer (state = initialState, action ) {
//   switch (action.type) {
//     case 'RECEIVE_PUPPIES':
//       return Object.assign({}, state, {allPuppies: action.receivedPuppies});
//     case 'GET_SINGLE_PUPPY':
//       return Object.assign({}, state, {singlePuppy: action.getSinglePuppy});
//     default:
//       return state;
//   }
// }
