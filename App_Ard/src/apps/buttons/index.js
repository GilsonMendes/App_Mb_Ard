import React, { useState } from "react"
import { Switch, Image } from 'react-native'
import Styles from '../styles';
import axios from "axios";
export default props => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const lamp1 = () => {
        if (isEnabled == false) {

            axios.get('http://192.168.100.47/onlamp1').then(response => {
                setUmi(dhtUmidity => response.data);
                console.log("Lamp1 acesa ")
            })
        }else{

            axios.get('http://192.168.100.47/offlamp1').then(response => {
                setUmi(dhtUmidity => response.data);
                console.log("Lamp1 apagada ")
            })

        }
    }
    const lamp2 = () => {
        if (isEnabled == false) {

            axios.get('http://192.168.100.47/onlamp2').then(response => {
                setUmi(dhtUmidity => response.data);
                console.log("Lamp1 acesa ")
            })
        }else{

            axios.get('http://192.168.100.47/offlamp2').then(response => {
                setUmi(dhtUmidity => response.data);
                console.log("Lamp1 apagada ")
            })

        }
    }
    return (
        <Switch style={Styles.btnSw}
            trackColor={{ false: '#E34234', true: '#93C572' }}
            thumbColor={isEnabled ? '#DFFF00' : '#E6E6FA'}
            lamp={isEnabled ? 'lamp_ac' : 'lamp_ap'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            onChange={props.lampV}
            value={isEnabled}
        />

    )
}