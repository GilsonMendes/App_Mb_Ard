import React, { Component } from 'react';
import { StatusBar, View, Text, Image } from 'react-native';
import Apps from '../apps'
import AppGrafic from '../apps/appGrafic';
import Buttons from '../apps/buttons';
import Styles from '../apps/styles';
import Container from './stylesGradiente'
class Telas extends Component {
    render() {
        return (
            <>
                <StatusBar />
                <Container>

                    <View style={Styles.container}>
                        <Image style={Styles.imgIcon}
                            source={require('../assets/umidade.png')}
                        />
                        <Image style={Styles.imgIcon}
                            source={require('../assets/flocosNeve.png')}
                        />

                        <AppGrafic />
                        <Buttons/>
                    </View>
                </Container>

            </>
        )
    }
}

export default Telas;