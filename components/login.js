import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { BackButton } from '../components/buttons.js';

export class LoginView extends Component {
    render() {
        return (
            <View>
                <Text>Login1</Text>
                <BackButton onBack={this.props.onBack} />
            </View>
        );
    }
}
