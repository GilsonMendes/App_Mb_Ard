import React, { useState } from "react"
import { Switch, Image } from 'react-native'
import Styles from '../styles';
export default props => {
    const [isEnabled, setIsEnabled] = useState(false);

    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <Switch style={Styles.btnSw}
            trackColor={{ false: '#E34234', true: '#93C572' }}
            thumbColor={isEnabled ? '#DFFF00' : '#E6E6FA'}
            lamp={isEnabled ? 'lamp_ac' : 'lamp_ap'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />


    )
}