import { COMMON_ACTIONS } from '../actions';

const initialState = {
    common: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
       case COMMON_ACTIONS.ERROR:
           return {
               ...state, 
               error: action.payload
           }
       default:
            return state;
    }
}