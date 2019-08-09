export const THEME_ACTIONS = {
    FETCH_THEME: 'FETCH_THEME'
}

export const fetchTheme = () => dispatch => {
    fetch(`/property/theme.json`, {
        method: "GET",
        headers: new Headers({
            'content-type': 'application/json; charset=utf-8'
        }),
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: THEME_ACTIONS.FETCH_THEME,
            payload: data
        }))
        
}