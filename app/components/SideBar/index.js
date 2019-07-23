import React from "react";
import { View, Text, Button } from "react-native";
import SideMenu from 'react-native-side-menu';
import styles from './styles';
import { connect } from 'react-redux';
import { getSidebarState } from './selectors';
import * as sidebarActions from './actions';

const SideBar = props => {
    const menu = <View><Text>opop</Text><Text>{props.isOpen}</Text><Button
    onPress={(e) => { props.setSidebarState(false)}}
    title="Close"
/></View>;

    return (
        <SideMenu 
            menu={menu} 
            isOpen={props.isOpen}
            disableGestures={false}
            onChange={state => props.setSidebarState(state)}
        >
            {props.children}
        </SideMenu>
    );
};

const mapStateToProps = state => {
    console.log('wtf', getSidebarState(state));
    //alert(JSON.stringify(getSidebarState(state)));
    return {
        isOpen: getSidebarState(state)
    };
};

const mapDispatchToProps = dispatch => {
    return {
        setSidebarState: (state) => dispatch(sidebarActions.setSidebarState(state))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);