
export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';
export const GET_SINGLE_PUPPY = 'GET_SINGLE_PUPPY';

export const receivePuppies = (puppies) =>
  (
    {
      type: RECEIVE_PUPPIES,
      receivedPuppies: puppies
    }
  );

export const getSinglePuppy = (puppy) =>
(
  {
    type: GET_SINGLE_PUPPY,
    singlePuppy: puppy
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

export function getServerSinglePuppy(puppyId) {
  return function (dispatch) {
    fetch(`/api/puppies/${puppyId}`)
    .then(e => e.json())
    .then(res => dispatch(getSinglePuppy(res)))
    .catch(console.error)
  }
}
