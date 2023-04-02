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
    container:{
        backgroundColor:'white',
        width:width,
        height:height,
        alignItems:'center',
        padding:10,
        marginTop:50
    },
})
export default styles;