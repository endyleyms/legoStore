import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'
import {getOne} from '../../../Services/alternovaStore'


const ProductDetail = ({route})=>{
    const [product, setProduct]= useState ([]);
    const {id} = route.params;
    console.log('id params', id, product)

    const fetchProduct = async () => {
        const data= await getOne (id);
        console.log(id)
        setProduct(data);
    }
    useEffect(()=>{
        fetchProduct();
    }, [id])
    return(
        <View style={styles.safeArea}>
            <Icon name='shopping-cart' size={30} style={styles.shoppingCart}/>
            <View style={styles.container}>
                <Text>Produc detail</Text>
                <Image  source={{uri: product?.image}} style={styles.image}/>
                <Text>{product?.name}</Text>
                <Text>Precio: {product?.unit_price}</Text>
                <Text>Stock: {product?.stock}</Text>
                <Text> {product?.description}</Text>
            </View>
        </View>
    );
};

export default ProductDetail;