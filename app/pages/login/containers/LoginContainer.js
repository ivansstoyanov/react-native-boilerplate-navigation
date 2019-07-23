import React, { Component } from 'react';
import LoginView from './LoginView';
import { connect } from 'react-redux';
import * as loginActions from '../actions';
import { getLoginState } from '../selectors';
//import AsyncStorage from '@react-native-community/async-storage';

class LoginContainer extends Component {
    async componentWillMount() {
        // const loginStatus = await AsyncStorage.getItem('loginStatus');
        // if (loginStatus) {
        //     //this.props.setInitialLogin(true);;
        //     alert(loginStatus);
        // }
    }

    render() {
        return <LoginView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        status: getLoginState(state)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogin: (un, pwd) => dispatch(loginActions.requestLogin(un, pwd)),
        setInitialLogin: (loginStatus) => dispatch(loginActions.setLoginStatus(loginStatus))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
