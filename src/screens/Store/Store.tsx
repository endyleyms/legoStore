import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {listAll} from '../../../Services/alternovaStore'

const CardProduct = ({navigation, product, id})=>{
    return(
        <TouchableOpacity style={styles.containerGeneral} onPress={() => navigation.navigate('ProductDetail', {id})}>
            <View style={styles.containerCard}>
                <Image style={styles.imageCard} source={{uri: product?.image }}/>
                <View style={styles.infoCard}>
                    <Text style={styles.text}>{product?.name}</Text>
                    <Text style={styles.text}>Precio: {product?.unit_price}</Text>
                    <Text style={styles.text}>Stock: {product?.stock}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

const Store = ({navigation})=>{
    const [product, setProduct]= useState ([]);
    console.log('product', product)
    const fetchProducts = async ()=>{
        const data= await listAll ();
        console.log('data', data)
        setProduct(data.products);
    }
    useEffect(()=>{
        fetchProducts();
    }, []);

    return(
        <View style={styles.safeArea}>
            <Icon name='shopping-cart' size={30} style={styles.shoppingCart}/>
            <View style={styles.container}>
                <Text>Products list</Text>
                <FlatList
                data={product}
                renderItem={({item}) => <CardProduct navigation={navigation} product={item} id={item?.id} />}
                keyExtractor={item => item.id}
                // style={styles.flatList}
                />
            </View>
        </View>
    );
};

export default Store;