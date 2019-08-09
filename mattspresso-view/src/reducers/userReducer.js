import { FETCH_USER, FETCH_USERS } from '../actions/types';

const initialState = {
    users: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
       case FETCH_USER:
           return {
               ...state, 
               current: action.payload
           }
        case FETCH_USERS:
            return {
                ...state, 
                list: action.payload
            }
       default:
            return state;
    }
}