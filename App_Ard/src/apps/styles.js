import { StyleSheet } from 'react-native';

export default Styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },

    appArea:{
        alignItems: 'flex-start',
        marginTop: 30,
        margin: 30
    },
    statusSw: {
        margin: 10,
        flexDirection:'row',
        justifyContent: 'space-around'
    },

    txtLeds: {
        alignItems:'center',
        justifyContent:'center',
        color: '#FFF',
        fontSize: 22,
        fontWeight: 700
    },
    imgIcon:{
        width: 25, 
        height: 25, 
        marginLeft:120, 
        marginBottom: -20
    },
    lamp:{
        width: 50,
        height: 50,
        marginLeft: 70
    },
    btnSw:{
        alignItems:'center',
        justifyContent:'center',
        marginLeft: 10,
        marginBottom: 15

    }
})