import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';
import styles from './styles';
import * as loginActions from '../actions';
import AsyncStorage from '@react-native-community/async-storage';
// import { navigateToHome } from '../../../navigation/NavigationHelpers';

export default class LoginView extends Component {

    async onPress () {
        // this.props.onLogin('uname', 'password');

        // setTimeout(() => {
        //     alert(this.props.status.toString());
        // }, 1000);

        this.props.setInitialLogin(true);
    };

    render() {
        return (
            <View style={styles.container}>
                <Button
                    onPress={async () => await this.onPress()}
                    title="Navigate to Home"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />
                <Text>Status: {this.props.status.toString()}</Text>
            </View>
        );
    }
}
