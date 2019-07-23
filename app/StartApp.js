/**
 * App Name
 * Everthing starts from the entrypoint
 */
import React, { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import Navigator from './navigation';
import configureStore from './store';
import SideBar from './components/SideBar';
const { persistor, store } = configureStore();

export default class Entrypoint extends Component {

    closeControlPanel = () => {
        this._drawer.close()
      };
      openControlPanel = () => {
        this._drawer.open()
      };

    render() {
        return (
            <Provider store={store}>
                <PersistGate
                    loading={<ActivityIndicator />}
                    persistor={persistor}
                >
                    <SideBar>
                        <Navigator />
                    </SideBar>
                </PersistGate>
            </Provider>
        );
    }
}
