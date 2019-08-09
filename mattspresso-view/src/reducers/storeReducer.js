import { ACTIONS } from '../actions/storeActions';

const initialState = {

}

export default function (state = initialState, action) {

    const newState = { ...state };

    switch (action.type) {
        case ACTIONS.FETCH_STORES:
        default:
            break;
    }

    return newState;
}