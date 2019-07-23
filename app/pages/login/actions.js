/*
 * Reducer actions related with login
 */
import * as types from './actionTypes';

export function requestLogin(username, password) {
    return {
        type: types.LOGIN_REQUEST,
        username,
        password
    };
}

export function setLoginStatus(isLoggedIn) {
    return {
        type: types.LOGIN_SET_STATUS,
        isLoggedIn
    };
}

export function onLoginResponse(response) {
    return {
        type: types.LOGIN_RESPONSE,
        response
    };
}

export function enableLoader() {
    return {
        type: types.LOGIN_ENABLE_LOADER
    };
}

export function disableLoader() {
    return {
        type: types.LOGIN_DISABLE_LOADER
    };
}
