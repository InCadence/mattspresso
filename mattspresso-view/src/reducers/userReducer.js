import { ACTIONS } from '../actions/userActions';

const initialState = {
    promptLogin: true
}

export default function (state = initialState, action) {

    const newState = { ...state };

    switch (action.type) {
        case ACTIONS.FETCH_USER_SUCCESS:
            newState.current = action.payload;
            newState.promptNew = false;
            newState.promptLogin = false;
            break;
        case ACTIONS.FETCH_USERS_SUCCESS:
            newState.list = action.payload;
            break;
        case ACTIONS.PROMPT_LOGIN:
            newState.current = undefined;
            newState.promptLogin = true;
            break;
        case ACTIONS.PROMPT_NEW_USER:
            newState.current = undefined;
            newState.promptLogin = false;
            newState.promptNew = true;
            break;
        case ACTIONS.LOGOUT:
            newState.promptLogin = true;
            newState.current = undefined;
            break;
        case ACTIONS.CREATE_USER:
            newState.promptNew = false;
            newState.current = action.payload;
            break;
        case ACTIONS.FETCH_USER:
        case ACTIONS.FETCH_USERS:
        default:
            break;
    }

    return newState;
}