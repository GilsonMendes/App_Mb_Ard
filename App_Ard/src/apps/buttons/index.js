import React, { useState } from "react"
import { Switch, Image, View, Text } from 'react-native'
import Styles from '../styles';
import axios from "axios";
export default props => {
    
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);

    const lamp1 = () => {
        if (isEnabled == false) {

            axios.get('http://192.168.100.47/onlamp1').then(response => {
                console.log("Lamp1 acesa ")
            })
        } else {

            axios.get('http://192.168.100.47/offlamp1').then(response => {
                console.log("Lamp1 apagada ")
            })

        }
    }
    const lamp2 = () => {
        if (isEnabled == false) {

            axios.get('http://192.168.100.47/onlamp2').then(response => {
                console.log("Lamp1 acesa ")
            })
        } else {

            axios.get('http://192.168.100.47/offlamp2').then(response => {
                console.log("Lamp1 apagada ")
            })

        }
    }
    return (
        <View style={Styles.appArea}>

            <View style={Styles.statusSw}>
                <Text style={Styles.txtLeds}>Lamp 1 </Text>
                <Switch style={Styles.btnSw}
                    trackColor={{ false: '#E34234', true: '#93C572' }}
                    thumbColor={isEnabled ? '#DFFF00' : '#E6E6FA'}
                    lamp={isEnabled ? 'lamp_ac' : 'lamp_ap'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    onChange={props.lampV}
                    value={isEnabled}
                />
            </View>
            <View style={Styles.statusSw}>
                <Text style={Styles.txtLeds}>Lamp 2 </Text>
                <Switch style={Styles.btnSw}
                    trackColor={{ false: '#E34234', true: '#93C572' }}
                    thumbColor={isEnabled2 ? '#DFFF00' : '#E6E6FA'}
                    lamp={isEnabled2 ? 'lamp_ac' : 'lamp_ap'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch2}
                    onChange={props.lampV}
                    value={isEnabled2}
                />
            </View>
        </View>

    )
}