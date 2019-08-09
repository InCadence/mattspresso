export const COMMON_ACTIONS = {
    ERROR: 'ERROR',
    ERROR_CLEAR: 'ERROR_CLEAR'
}

export const clearError = () => dispatch => {
    dispatch({
        type: COMMON_ACTIONS.ERROR,
        payload: undefined
    })
}