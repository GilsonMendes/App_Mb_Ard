const { Component } = require("react");
import { View } from 'react-native';
import Apps from '../apps'
import AppGrafic from '../apps/appGrafic';
import Styles from '../apps/styles';

class Telas extends Component {
    render() {
        return (
            <View style={Styles.container}>
                <Apps />
                <AppGrafic />
            </View>
        )
    }
}

export default Telas;