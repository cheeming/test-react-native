import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableHighlight
} from 'react-native';
import { connect, Provider } from 'react-redux';


const navigator = (n=<AppNavigator />, action) => {
    switch (action.type) {
        case 'NAVIGATE':
            console.log(n);
            n.goto(action.route);
            return n;
        default:
            return n;
    }
}

export default navigator
