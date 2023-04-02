import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'


const ProductDetail = ()=>{
    return(
        <View style={styles.safeArea}>
            <Icon name='shopping-cart' size={30} style={styles.shoppingCart}/>
            <View style={styles.container}>
                <Text>Produc detail</Text>
            </View>
        </View>
    );
};

export default ProductDetail;