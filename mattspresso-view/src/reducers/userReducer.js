import { FETCH_USER, FETCH_USER_SUCCESS, FETCH_USERS, FETCH_USERS_SUCCESS } from '../actions/types';

const initialState = {
    users: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                current: action.payload
            }
        case FETCH_USERS_SUCCESS:
            return {
                ...state,
                list: action.payload
            }
        default:
        case FETCH_USER:
        case FETCH_USERS:
            return state;
    }
}