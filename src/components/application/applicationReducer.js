import * as types from '../common/actionTypes';

export default function applicationReducer(state = [],action){    
    switch(action.type){
        case types.CREATE_APPLICATION:
            return [...state,
            Object.assign({},action.application)
            ];
        default: 
            return state;
    }
 }
