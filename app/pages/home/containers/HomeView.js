import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export default class HomeView extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }

     onPress () {
        this.props.onLogOut();
        //this.props.onLogin('uname', 'password');

        // setTimeout(() => {
        //     alert(this.props.status.toString());
        // }, 1000);
    };

    render() {
        return (
            <View>
                <Text> Hello home view </Text>
                <Button
                    onPress={ () =>  this.onPress()}
                    title="LogOut"
                    color="#841584"
                />
                <Text>Status: {this.props.status.toString()}</Text>
            </View>
        );
    }
}
