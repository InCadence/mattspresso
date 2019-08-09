import { USER_ACTIONS } from '../actions/userActions';

const initialState = {
    users: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case USER_ACTIONS.FETCH_USER_SUCCESS:
            return {
                ...state,
                current: action.payload
            }
        case USER_ACTIONS.FETCH_USERS_SUCCESS:
            return {
                ...state,
                list: action.payload
            }
        default:
        case USER_ACTIONS.FETCH_USER:
        case USER_ACTIONS.FETCH_USERS:
            return state;
    }
}