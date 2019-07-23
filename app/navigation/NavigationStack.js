import React from "react";
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import Header from '../components/Header';
import Login from '../pages/login/containers/LoginContainer';
import Home from '../pages/home/containers/HomeContainer';

const RNApp = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions: { header: null }
        },
        Home: {
            screen: Home,
            navigationOptions: { header: props => <Header {...props} /> }
        }
    },
    {
        initialRouteName: "Home"
    }
);

const HomeStack = createStackNavigator({
    Home: { 
        screen: Home,
        navigationOptions: { header: props => <Header {...props} /> }
    }
});
  
const LoginStack = createStackNavigator({
    Login: Login
});

const RNApp1 = createBottomTabNavigator({
    Home: HomeStack,
    Login: LoginStack
}, {
    initialRouteName: "Home"
});

export default createAppContainer(RNApp1);
