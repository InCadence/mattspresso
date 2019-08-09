import { ACTIONS } from '../actions/inventoryActions';

const initialState = {

}

export default function (state = initialState, action) {

    const newState = { ...state };

    switch (action.type) {
        case ACTIONS.FETCH_INVENTORY:
        default:
            break;
    }

    return newState;
}