import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        paddingTop:30,
        backgroundColor:'white',
        height:height,
        width: width
    },
    create:{
        fontSize:30,
        marginTop:50
    },
    login:{
        fontSize:15,
        marginTop:30
    },
    containerForm:{
        alignItems:'center',
        width:'90%',
        height:'100%',
        marginTop:100,
    },
    input:{
        backgroundColor:'#D9D9D9',
        width:'100%',
        borderRadius:15,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:20,
        padding:10
    },
    text:{
        marginRight:270,
        color:'#8F8E8E',
        padding:10
    },
    containerButton:{
        width:'100%',
        height:'15%',
        paddingTop:30
    },
    button:{
        borderRadius:10,
        backgroundColor: '#FFBD59',
        justifyContent:'center',
        alignItems:'center',
        height:40,
        width:370
    },
    textButton:{
        color:'#1C2120',
        fontSize:16
    },

})
export default styles;