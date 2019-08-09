import { ACTIONS } from '../actions/userActions';

const initialState = {

}

export default function (state = initialState, action) {

    const newState = { ...state };

    switch (action.type) {
        case ACTIONS.FETCH_USER_SUCCESS:
            newState.current = action.payload;
            break;
        case ACTIONS.FETCH_USERS_SUCCESS:
            newState.list = action.payload;
            break;
        default:
        case ACTIONS.FETCH_USER:
        case ACTIONS.FETCH_USERS:
            break;
    }

    return newState;
}