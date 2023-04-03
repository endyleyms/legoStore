import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea:{
        backgroundColor:'white',
    },
    shoppingCart:{
        position:'absolute',
        left:365,
        top:5,
        color:'white',
        backgroundColor:'#9C9B7A',
        borderRadius:20,
        height:'4.5%',
        width:'10%',
        padding:5
    },
    containerGeneral:{
        height:'25%',
        // backgroundColor:'red'
    },
    container:{
        backgroundColor:'white',
        width:width,
        height:height,
        alignItems:'center',
        // padding:10,
    },
    containerCard:{
        flexDirection:'row',
        width:'90%',
        backgroundColor:'#FDF4E7',
        borderRadius:15,
        height:90,
    },
    imageCard:{
        width:'30%',
        height:'80%',
        backgroundColor:'white',
        marginTop:12,
        borderRadius:15,
        marginLeft:15
    },
    infoCard:{
        justifyContent:'center',
        marginLeft:20,
        width:'50%'
    },
    text:{
        fontSize:15,
        color:'black',
        padding:2
    }
})
export default styles;