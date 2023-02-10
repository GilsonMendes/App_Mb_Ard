import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Switch,
} from 'react-native'
import Pie from 'react-native-pie'

export default () => {
    return (
        <View style={styles.container}>
           
            <View style={styles.tempArea}>
                <View style={{ width: 175, alignItems: 'center' }}>

                    <Pie
                        radius={80}
                        innerRadius={72}
                        sections={[
                            {
                                percentage: 40,
                                color: '#00FFFF',
                            },
                            
                           
                        ]}
                        backgroundColor="#FFF"
                    />
                    <View
                        style={styles.gauge}
                    >
                        <Text
                            style={styles.gaugeText}
                        >
                            25Cº
                        </Text>
                    </View>
                </View>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    gauge: {
        position: 'absolute',
        width: 100,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#FFF',
        fontSize: 24,
        fontWeight: 600
    },

    tempArea: {
        alignItems: 'center',
    }
})