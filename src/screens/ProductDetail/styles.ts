import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea:{
        backgroundColor:'white',
    },
    shoppingCart:{
        position:'absolute',
        left:360,
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
    containerDetail:{
        width:'90%',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
    },
    image:{
        width:'90%',
        height:'40%',
        backgroundColor:'#FDF4E7',
        borderRadius: 20
    },
    circleCart:{
        position:'absolute',
        left:380,
        top:28,
        width:20,
        height:20,
        backgroundColor:'red',
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    textCircle:{
        color: 'white'
    },
    AddToCart:{
        flexDirection:'row',
        backgroundColor:'#9C9B7A',
        height:40,
        width:180,
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:20,
        padding:10,
        marginTop:30
    },
    unableAddToCart:{
        flexDirection:'row',
        backgroundColor:'#e5e5e5',
        height:40,
        width:180,
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:20,
        padding:10
    }
})
export default styles;