import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    safeArea:{
        backgroundColor:'white',
        height:height
    },
    shoppingCart:{
        position:'absolute',
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
    containerGeneral:{
        paddingBottom:10
    },
    container:{
        backgroundColor:'white',
        justifyContent:'space-around',
        width:width,
        height:'100%',
        alignItems:'center',
        marginTop:60
    },
    flatList:{
        height:'100%',
        width:'90%'
    },
    containerCard:{
        flexDirection:'row',
        width:'100%',
        backgroundColor:'#FDF4E7',
        borderRadius:15,
        height:120,
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
    },
    detailShop:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    detailView:{
        backgroundColor:'#9C9B7A',
        borderRadius: 10,
        width:'50%',
        height:30,
        justifyContent:'center',
        alignItems:'center'
    },
    unableDetailView:{
        backgroundColor:'#e5e5e5',
        borderRadius: 10,
        width:'50%',
        height:30,
        justifyContent:'center',
        alignItems:'center'
    },
    textDetail:{
        color:'white'
    },
    shoppingCard:{
        backgroundColor:'#9C9B7A',
        width:35,
        height:35,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
    },
    unableShoppingCard:{
        backgroundColor:'#e5e5e5',
        width:35,
        height:35,
        borderRadius:20,
        justifyContent:'center',
        alignItems:'center'
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
        justifyContent:'center',
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
    modalContainerShop:{
        backgroundColor:'#dad7cd',
        width: '60%',
        height:'20%',
        marginTop:300,
        marginLeft: 80,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    }
})
export default styles;