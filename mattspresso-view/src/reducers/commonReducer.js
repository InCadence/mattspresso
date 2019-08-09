import { ERROR } from '../actions/types';

const initialState = {
    common: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
       case ERROR:
           return {
               ...state, 
               error: action.payload
           }
       default:
            return state;
    }
}