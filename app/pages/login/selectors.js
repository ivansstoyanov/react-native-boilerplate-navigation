import { createSelector } from 'reselect';

//very basic .. this has nothing to do with Reselect
export const getIsLoggedIn = state => state.loginReducer.isLoggedIn;

//an example to demonstrate how reselect works
export const getLoginState = createSelector(
    [getIsLoggedIn],
    isLoggedIn => isLoggedIn
);
