import * as types from '../../common/actionTypes';

export  function createApplicationClaim(applicationClaim){
    return {type:types.CREATE_APPLICATION_CLAIM,applicationClaim};
}