import * as types from '../common/actionTypes';

export  function createApplication(application){
    return {type:types.CREATE_APPLICATION,application};
}