/* Login Reducer
 * handles login states in the app
 */
import createReducer from '../../lib/createReducer';
import * as types from './actionTypes';
import { navigateToHome, navigateToLogin } from '../../navigation/NavigationHelpers';

const initialState = {
    isLoggedIn: false,
    id: -1,
    username: '',
    password: ''
};

export const loginReducer = createReducer(initialState, {
    [types.LOGIN_REQUEST](state, action) {
        return {
            ...state,
            username: action.username,
            password: action.password
        };
    },
    [types.LOGIN_RESPONSE](state, action) {
        return {
            ...state,
            id: action.response.id,
            isLoggedIn: true
        };
    },
    [types.LOGIN_SET_STATUS](state, action) {
        //alert('navigate' + action);
        if (!action.isLoggedIn) {
            //alert('navigate');
            navigateToLogin();
        } else {
            navigateToHome();
        }
        return {
            ...state,
            isLoggedIn: action.isLoggedIn
        };
    }
});
