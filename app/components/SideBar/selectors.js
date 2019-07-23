import { createSelector } from 'reselect';

//very basic .. this has nothing to do with Reselect
export const getSidebarIsOpen = state => state.sidebarReducer.isOpen;

//an example to demonstrate how reselect works
export const getSidebarState = createSelector(
    [getSidebarIsOpen],
    isOpen => isOpen
);
