// import { API_URL } from '../../constants'
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

export function fetchGetUsers() {
    return async dispatch => {
        try {
            // const res = await fetch(`${API_URL}/users`)
            // const data = await res.json();
            const data = [
                {
                    name: 'Jane Doe',
                    age: 25,
                },
                {
                    name: 'Thom Son',
                    age: 18,
                }
            ]
            if (data) {
                return dispatch({
                    type: GET_USER_SUCCESS,
                    data,
                    // status: res.status,
                });
            }
            else {
                return dispatch({
                    type: GET_USER_FAILURE,
                    data: null,
                    // status: res.status ? res.status : res,
                });
            }
        } catch (err) {
            return dispatch({
                type: GET_USER_FAILURE,
                data: null,
                status: err.status ? err.status : err,
            });
        }
    }
}