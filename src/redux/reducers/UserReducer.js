import {
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
} from '../actions';

export function getUsers(state = {}, action) {
    switch (action.type) {
        case GET_USER_SUCCESS:
            return Object.assign({}, state, { ...action });
        case GET_USER_FAILURE:
            return Object.assign({}, state, { ...action });
        default:
            return state;
    }
}