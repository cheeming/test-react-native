import React, { Component } from 'react';
import {
  Text,
  TouchableHighlight
} from 'react-native';

export class BackButton extends Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.onBack}>
                <Text>Back</Text>
            </TouchableHighlight>
        );
    }
}
