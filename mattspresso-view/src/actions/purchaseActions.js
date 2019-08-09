import { COMMON_ACTIONS } from './';
import { takeLatest, put, call } from 'redux-saga/effects';
import uuid from 'uuid';

export const ACTIONS = {
    FETCH_PURCHASES: "FETCH_PURCHASES",
    MAKE_PURCHASE: "MAKE_PURCHASE"
}

export const makePurchase = (products) => dispatch => {
    console.log(products);
    fetch(`cxf/mattspresso`, {
        method: "POST",
        headers: new Headers({
            'content-type': 'application/json; charset=utf-8'
        }),
        body: JSON.stringify({
            "purchaseRecord": products,
            "key": uuid.v4(),
        })
    })
        .then(res => {

            if (!res.ok) {
                throw Error(res.statusText);
            }

            return res.text();
        })
        .then(key => dispatch({
            type: ACTIONS.MAKE_PURCHASE,
            payload: {key: key, purchaseRecord: products}
        }))
        .catch(error => dispatch({
            type: COMMON_ACTIONS.ERROR,
            payload: error.message
        }));
}