import React, { Component } from 'react';
import { StatusBar, View, Text } from 'react-native';
import Apps from '../apps'
import AppGrafic from '../apps/appGrafic';
import Styles from '../apps/styles';
import Container from './stylesGradiente'
class Telas extends Component {
    render() {
        return (
            <>
                <StatusBar />
                <Container>
                    <View style={Styles.container}>
                        <AppGrafic />
                        <Apps />
                    </View>
                </Container>

            </>
        )
    }
}

export default Telas;