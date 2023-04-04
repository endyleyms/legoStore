import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea:{
        backgroundColor:'white',
    },
    shoppingCart:{
        left:360,
        top:5,
        color:'white',
        backgroundColor:'#9C9B7A',
        borderRadius:20,
        height:40,
        width:'10%',
        padding:5
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
    },
    modalContainer:{
        backgroundColor:'#dad7cd',
        width: '95%',
        height:'80%',
        marginTop:100,
        marginLeft: 10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20
    },
    containerCardModal:{
        flexDirection:'row',
        justifyContent:'space-evenly',
        width:'90%',
        height:'30%',
        borderRadius:15,
        alignItems:'center',
        borderWidth: 0.5,
        borderColor: 'gray'
    },
    imageCardModal:{
        width:'40%',
        height:'70%',
        backgroundColor:'white',
        borderRadius:15,
    },
    closeModal:{
        position:'absolute',
        top: 10,
        right:10
    },
    detailView:{
        backgroundColor:'#9C9B7A',
        borderRadius: 10,
        width:100,
        height:30,
        justifyContent:'center',
        alignItems:'center'
    },
    textDetail:{
        color:'white'
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
    },
    modalContainerShop:{
        backgroundColor:'#dad7cd',
        width: '60%',
        height:'20%',
        marginTop:300,
        marginLeft: 80,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
        opacity:0.4,
    }
})
export default styles;