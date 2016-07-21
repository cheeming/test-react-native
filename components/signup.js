import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import { BackButton } from '../components/buttons.js';

export class SignupView extends Component {
    render() {
        return (
            <View>
                <Text>Signup1</Text>
                <BackButton onBack={this.props.onBack} />
            </View>
        );
    }
}
