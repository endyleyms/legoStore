import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'
import {getOne} from '../../../Services/alternovaStore'


const ProductDetail = ({route})=>{
    const [product, setProduct]= useState([]);
    const {id, shopping,} = route.params;
    const [_shopping, setShopping]= useState(shopping);

    const fetchProduct = async () => {
        const data= await getOne (id);
        setProduct(data);
    }
    useEffect(()=>{
        fetchProduct();
    }, [id])

    return(
        <View style={styles.safeArea}>
            {_shopping ?
                <>
                    <Icon name='shopping-cart' size={30} style={styles.shoppingCart} />
                    <View style={styles.circleCart}><Text style={styles.textCircle}>1</Text></View>
                </>
                :
                <Icon name='shopping-cart' size={30} style={styles.shoppingCart} />
            }
            <View style={styles.container}>
                {/* <Text>Produc detail</Text> */}
                <Image  source={{uri: product?.image}} style={styles.image}/>
                <View style={styles.containerDetail}>
                    <Text>{product?.name}</Text>
                    <Text>Precio: {product?.unit_price}</Text>
                    <Text>Stock: {product?.stock}</Text>
                    <Text> {product?.description}</Text>
                </View>
                {product?.stock === 0 ?
                <View style={styles.unableAddToCart}>
                    <Text style={{color:'white'}}>Add a product to cart</Text>
                    <Icon name='add-shopping-cart' size={20} color={'white'} />
                </View>
                :
                <Pressable style={styles.AddToCart} onPress={() => setShopping(id)}>
                    <Text style={{color:'white'}}>Add a product to cart</Text>
                    <Icon name='add-shopping-cart' size={20} color={'white'} />
                </Pressable>
                }
            </View>
        </View>
    );
};

export default ProductDetail;