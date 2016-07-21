/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux';

import testApp from './reducers'
import { AppNavigator } from './components/navigator.js'

// Setup the main entry point
let store = createStore(testApp);

class TestReactNativeNavigator extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigator />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('TestReactNativeNavigator', () => TestReactNativeNavigator);
