import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Switch,
} from 'react-native'
import Pie from 'react-native-pie'
import Rotas from '../../rotas'


export default props =>{

 function numTe(){
    console.log(num)
 }
 numTe()
    return (
        <View style={styles.container}>
           
            <View style={styles.tempArea}>
                <View style={{ width: 175, alignItems: 'center' }}>

                    <Pie
                        radius={80}
                        innerRadius={72}
                        sections={[
                            {
                                percentage: 30,
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
                            <Rotas/>
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
    /* gaugeText: {
        backgroundColor: 'transparent',
        color: '#FFF',
        fontSize: 24,
        fontWeight: 600
    }, */

    tempArea: {
        alignItems: 'center',
    }
})