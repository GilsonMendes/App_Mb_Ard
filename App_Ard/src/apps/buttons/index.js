import React, {useState} from "react"
import {Switch} from 'react-native'
export default props => {
    const [isEnabled, setIsEnabled] = useState(false);
    
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <Switch
                trackColor={{ false: '#E34234', true: '#93C572' }}
                thumbColor={isEnabled ? '#DFFF00' : '#E6E6FA'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
    )
}