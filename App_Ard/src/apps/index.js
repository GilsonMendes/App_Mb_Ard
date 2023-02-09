import React, { useState } from "react";
import { Text, View } from 'react-native';
import Buttons from "./buttons";
import Styles from "./styles";
export default props => {
    return (

        <View style={Styles.appArea}>
            <Text>Led 1 </Text>
            <Buttons />
            <Text>Led 2</Text>
            <Buttons />
        </View>

    )

}