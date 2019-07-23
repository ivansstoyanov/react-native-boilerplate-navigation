import React, { Component } from 'react';
import HomeView from './HomeView';
import { connect } from 'react-redux';
import * as loginActions from '../../login/actions';
import { getLoginState } from '../../login/selectors';
import AsyncStorage from '@react-native-community/async-storage';

class HomeContainer extends Component {
    async componentWillMount() {
        const loginStatus = await AsyncStorage.getItem('loginStatus');
        if (loginStatus) {
            //this.props.setInitialLogin(true);;
            alert(loginStatus);
        }
    }

    render() {
        return <HomeView {...this.props} />;
    }
}

function mapStateToProps(state) {
    return {
        status: getLoginState(state)
    };
}
function mapDispatchToProps(dispatch) {
    return {
        onLogOut: () => dispatch(loginActions.setLoginStatus(false))
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
