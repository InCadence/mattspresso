import { ERROR } from './types'

export const clearError = () => dispatch => {
    console.log("clearing error...");
    
    dispatch({
        type: ERROR,
        payload: undefined
    })

}