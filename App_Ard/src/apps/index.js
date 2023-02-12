import React from "react";
import { Text, View, Image } from 'react-native';
import Buttons from "./buttons";
import Styles from "./styles";
export default props => {
    return (

        <View style={Styles.appArea}>
            <View style={Styles.statusSw}>
                <Text style={Styles.txtLeds}>Lamp 1 </Text>
                <Buttons />
            </View>
            <View style={Styles.statusSw}>
                <Text style={Styles.txtLeds}>Lamp 2 </Text>
                <Buttons />
            </View>
        </View>

    )

}