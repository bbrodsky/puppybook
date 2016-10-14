
export const RECEIVE_PUPPIES = 'RECEIVE_PUPPIES';

export const receivePuppies = (puppies) =>
  (
    {
      type: RECEIVE_PUPPIES,
      receivedPuppies: puppies
    }
  );


