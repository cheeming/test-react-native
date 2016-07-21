import React, { Component } from 'react';
import {
    Navigator
} from 'react-native';

import { LandingContainer } from '../containers/landing.js'
import { LoginView } from '../components/login.js'
import { SignupView } from '../components/signup.js'

// Setup Navigator
const getRoute = (routeId) => {
    return {
        id: routeId
    }
}

const renderScene = (route, navigator) => {
    const goBack = () => {
        navigator.pop();
    }

    if (route.id === 'LANDING') {
        return (
            <LandingContainer
                onLogin={() => {
                    navigator.push(getRoute('LOGIN'))
                }}
                onSignup={() => {
                    navigator.push(getRoute('SIGNUP'))
                }}
            />
        );
    }
    if (route.id === 'LOGIN') {
        return (
            <LoginView onBack={goBack} />
        );
    }
    if (route.id === 'SIGNUP') {
        return (
            <SignupView onBack={goBack} />
        );
    }
}

// Navigator component for the app
export class AppNavigator extends Component {
    render() {
        return <Navigator
                    initialRoute={getRoute('LANDING')}
                    renderScene={renderScene}
                    style={{padding: 100}} />
    }
}
