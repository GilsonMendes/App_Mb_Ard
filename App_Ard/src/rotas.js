import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Styles from './apps/styles';


export default props =>{


    const [temp, setTem] = useState('--');

    const temperature = () => {
        axios.get('http://192.168.100.47/dht11/temp').then(response => {
            setTem(dataTemperature => response.data);
        })
    }

    const [dthUmi, setUmi] = useState('--');

    const umidity = () => {
        axios.get('http://192.168.100.47/dht11/humi').then(response => {
            setUmi(dhtUmidity => response.data);
            console.log("Umidity ")
        })
    }

    return (
        <View>
            <TouchableOpacity onPress={temperature}>
                <Text style={Styles.temp}>{temp}Cº</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={umidity} >
                <Text style={Styles.umi}>{dthUmi}%</Text>
            </TouchableOpacity>

        </View>

    
        
    )
}