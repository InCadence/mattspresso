import { combineReducers } from 'redux';
import userReducer from './userReducer';
import commonReducer from './commonReducer';
import productReducer from './productReducer';
import inventoryReducer from './inventoryReducer';
import purchaseReducer from './purchaseReducer';
import storeReducer from './storeReducer';

export default combineReducers({
    users: userReducer,
    products: productReducer,
    inventory: inventoryReducer,
    cart: purchaseReducer,
    store: storeReducer,
    common: commonReducer
});