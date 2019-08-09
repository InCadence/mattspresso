import { ACTIONS } from '../actions/purchaseActions';

const initialState = {

}

export default function (state = initialState, action) {

    const newState = { ...state };

    switch (action.type) {
    	case ACTIONS.MAKE_PURCHASE:
    		newState.current = action.payload;
    		break;
    	case ACTIONS.FETCH_PURCHASES:
        default:
            break;
    }

    return newState;
}