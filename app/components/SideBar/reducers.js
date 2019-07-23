import createReducer from '../../lib/createReducer';
import * as types from './actionTypes';

const initialState = {
    isOpen: false
};

export const sidebarReducer = createReducer(initialState, {
    [types.SIDEBAR_STATE](state, action) {
        return {
            ...state,
            isOpen: action.isOpen
        };
    }
});
