import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

export class LandingView extends Component {
    render() {
        return (
            <View>
                <Text>LANDING1</Text>

                <TouchableHighlight onPress={this.props.onLogin}>
                    <Text>LOGIN</Text>
                </TouchableHighlight>

                <TouchableHighlight onPress={this.props.onSignup}>
                    <Text>SIGNUP</Text>
                </TouchableHighlight>

            </View>
        );
    }
}
