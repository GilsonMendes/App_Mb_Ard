const { Component } = require("react");
import { ScrollView, StatusBar, View } from 'react-native';
import Apps from '../apps'
import AppGrafic from '../apps/appGrafic';
import Styles from '../apps/styles';

class Telas extends Component {
    render() {
        return (
            <>
            <StatusBar/>
                <View style={Styles.container}>
                    <AppGrafic />
                    <Apps />
                </View>

            </>
        )
    }
}

export default Telas;