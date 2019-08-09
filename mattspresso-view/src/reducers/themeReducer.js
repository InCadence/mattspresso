 import { THEME_ACTIONS } from '../actions/themeActions';

 const initialState = {
     theme: {}
 }

 export default function(state = initialState, action) {
     switch(action.type) {
        case THEME_ACTIONS.FETCH_THEME:
                return {
                ...state, 
                theme: action.payload
            }
        default:
                return state;
     }
 }