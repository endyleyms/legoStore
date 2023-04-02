import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

const CardProduct = ({navigation})=>{
    return(
        <TouchableOpacity style={styles.containerCard} onPress={() => navigation.navigate('ProductDetail')}>
            <View style={styles.imageCard}/>
            <View style={styles.infoCard}>
                <Text style={styles.text}>Name</Text>
                <Text style={styles.text}>Price</Text>
                <Text style={styles.text}>Stock</Text>
            </View>
        </TouchableOpacity>
    );
};

const Store = ({navigation})=>{
    return(
        <View style={styles.safeArea}>
            <Icon name='shopping-cart' size={30} style={styles.shoppingCart}/>
            <View style={styles.container}>
                <Text>Products list</Text>
                <CardProduct navigation={navigation} />
            </View>
        </View>
    );
};

export default Store;