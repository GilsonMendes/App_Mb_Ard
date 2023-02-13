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
        width: 20, 
        height: 20, 
        marginLeft:150, 
        marginBottom: -60
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

    },

    temp:{
        fontSize: 24,
        fontWeight:600,
        color: '#FFF',
        marginLeft:5
    },
    umi:{
        fontSize: 20,
        color:'#FFF',
        marginLeft:10,
        fontWeight:600
    }
   
})