import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const claimTypes = [
  {
    id: 'ASI:Authorisation:ClaimType:Boolean'
  },
  {
    id: 'ASI:Authorisation:ClaimType:SingleValue'
  }
];

class ClaimTypeApi {
  static getAllClaimTypes() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], claimTypes));
      }, delay);
    });
  }
}

export default ClaimTypeApi;