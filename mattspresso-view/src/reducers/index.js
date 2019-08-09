import { combineReducers } from 'redux';
import themeReducer from './themeReducer';
import userReducer from './userReducer';
import commonReducer from './commonReducer';

export default combineReducers({
    users: userReducer,
    theme: themeReducer,
    common: commonReducer
});