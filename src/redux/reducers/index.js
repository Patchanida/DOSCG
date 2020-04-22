import { combineReducers } from 'redux';
import { getUsers } from './UserReducer';

const rootReducer = combineReducers({
    getUsers,
});

export default rootReducer;