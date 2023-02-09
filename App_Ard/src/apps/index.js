import React, { useState } from "react";
import {Text, View} from 'react-native';
import Buttons from "./buttons";
import Styles from './styles'

export default props => {
    return (
        <View style={Styles.container}>
            <Buttons/>
        </View>
    )

}