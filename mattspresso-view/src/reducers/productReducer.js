import { ACTIONS } from '../actions/productActions';

const initialState = {

}

export default function (state = initialState, action) {

    const newState = { ...state };

    switch (action.type) {
        case ACTIONS.FETCH_PRODUCTS:
        default:
            break;
    }

    return newState;
}