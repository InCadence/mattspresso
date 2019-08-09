 import { FETCH_THEME } from '../actions/types';

 const initialState = {
     theme: {}
 }

 export default function(state = initialState, action) {
     switch(action.type) {
        case FETCH_THEME:
                return {
                ...state, 
                theme: action.payload
            }
        default:
                return state;
     }
 }