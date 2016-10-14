
export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';

export const receivePuppies = (puppies) =>
  (
    {
      type: RECEIVE_PUPPIES,
      receivedPuppies: puppies
    }
  );

// export const getPuppies = () =>
//   dispatch => {
//     fetch('/api/puppies')
//     .then(e => e.json())
//     .then(res => dispatch(receivePuppies(res)))
//   }


export function getPuppies() {
  return function (dispatch) {
    fetch('/api/puppies')
    .then(e => e.json())
    .then(res => dispatch(receivePuppies(res)))
    .catch(console.error)
  }
}
