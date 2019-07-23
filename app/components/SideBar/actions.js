import * as types from './actionTypes';

export function setSidebarState(isOpen) {
    //alert(state);
    return {
        type: types.SIDEBAR_STATE,
        isOpen
    };
}
