import { FETCH_THEME } from './types'

export const fetchTheme = () => dispatch => {
    console.log('GOT HERE');
    
    fetch(`/property/theme.json`, {
        method: "GET",
        headers: new Headers({
            'content-type': 'application/json; charset=utf-8'
        }),
        })
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_THEME,
            payload: data
        }))
        
}