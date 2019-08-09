import { COMMON_ACTIONS } from './';
import { takeLatest, put, call } from 'redux-saga/effects';

export const USER_ACTIONS = {
    FETCH_USER: 'FETCH_ACCOUNTS',
    FETCH_USER_SUCCESS: 'FETCH_ACCOUNTS_SUCCESS',

    FETCH_USERS: 'FETCH_USERS',
    FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS'
}

export function* watchFechUser() {
    yield takeLatest(USER_ACTIONS.FETCH_USER, fetchUserAsync);
}

function* fetchUserAsync(action) {

    var res = yield call(fetch, `cxf/mattspresso/user/${action.payload}`, {
        method: "GET",
        headers: new Headers({
            'content-type': 'application/json; charset=utf-8'
        })
    })

    if (res.ok) {
        var json = yield call([res, res.json]);
        yield put({ type: USER_ACTIONS.FETCH_USER_SUCCESS, payload: json });
    } else {
        yield put({ type: COMMON_ACTIONS.ERROR, payload: res.statusText });
    }

}

export const fetchUser = (key) => dispatch => {

    dispatch({
        type: USER_ACTIONS.FETCH_USER,
        payload: key
    });
    /*
    console.log(`fetching user... ${key}`);

    fetch(`cxf/mattspresso/user/${key}`, {
        method: "GET",
        headers: new Headers({
            'content-type': 'application/json; charset=utf-8'
        }),
    })
        .then(res => {

            if (!res.ok) {
                throw Error(res.statusText);
            }

            return res.json();
        })
        .then(data => dispatch({
            type: USER_ACTIONS.FETCH_USER,
            payload: data
        }))
        .catch(error => dispatch({
            type: COMMON_ACTIONS.ERROR,
            payload: error.message
        }));
*/
}

export function* watchFechUsers() {
    yield takeLatest(USER_ACTIONS.FETCH_USERS, fetchUsersAsync);
}

function* fetchUsersAsync(action) {

    const query = { "type": "User", "pageSize": 200, "pageNumber": 1, "propertyNames": ["User.fullName"], "sortBy": [{ "propertyName": "CoalesceEntity.LastModified", "sortOrder": "ASC" }], "group": { "operator": "AND", "criteria": [{ "key": "456b70f3-3e6c-4ab2-967c-99a00ec3267e", "recordset": "CoalesceEntity", "field": "name", "operator": "EqualTo", "value": "User", "matchCase": false }], "groups": [] } };

    var res = yield call(fetch, `cxf/data/search/complex/`, {
        method: "POST",
        headers: new Headers({
            'content-type': 'application/json; charset=utf-8'
        }),
        body: JSON.stringify(query)
    })

    if (res.ok) {
        var json = yield call([res, res.json]);
        yield put({ type: USER_ACTIONS.FETCH_USERS_SUCCESS, payload: json.hits.map(hit => { return { key: hit.entityKey, name: hit.values[0] } }) })
    } else {
        yield put({ type: COMMON_ACTIONS.ERROR, payload: res.statusText });
    }

}

export const fetchUsers = () => dispatch => {

    dispatch({
        type: USER_ACTIONS.FETCH_USERS,
        payload: undefined
    });
    /*
        console.log(`fetching users...`);
    
        const query = { "type": "User", "pageSize": 200, "pageNumber": 1, "propertyNames": ["User.fullName"], "sortBy": [{ "propertyName": "CoalesceEntity.LastModified", "sortOrder": "ASC" }], "group": { "operator": "AND", "criteria": [{ "key": "456b70f3-3e6c-4ab2-967c-99a00ec3267e", "recordset": "CoalesceEntity", "field": "name", "operator": "EqualTo", "value": "User", "matchCase": false }], "groups": [] } };
    
        fetch(`cxf/data/search/complex/`, {
            method: "POST",
            headers: new Headers({
                'content-type': 'application/json; charset=utf-8'
            }),
            body: JSON.stringify(query)
        })
        .then(res => {
    
            if (!res.ok) {
                throw Error(res.statusText);
            }
    
            return res.json();
        })
        .then(data => dispatch({
            type: USER_ACTIONS.FETCH_USERS,
            payload: data.hits.map(hit => {return {key: hit.entityKey, name: hit.values[0]}})
        }))
        .catch(error => dispatch({
            type: COMMON_ACTIONS.ERROR,
            payload: error.message
        }));
    */
}