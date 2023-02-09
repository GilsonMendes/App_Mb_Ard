import React, {useState} from "react"
import {Switch} from 'react-native'
export default props => {
    const [isEnabled, setIsEnabled] = useState(false);
    
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <Switch
                trackColor={{ false: '#932', true: '#093' }}
                thumbColor={isEnabled ? '#DAF7A6' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
    )
}