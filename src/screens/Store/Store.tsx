import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, FlatList, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { listAll } from '../../../Services/alternovaStore'

const CardProduct = ({ navigation, product, id, setShopping, shopping }) => {
    return (
        <TouchableOpacity style={styles.containerGeneral} onPress={() => navigation.navigate('ProductDetail', { id })}>
            <View style={styles.containerCard}>
                <Image style={styles.imageCard} source={{ uri: product?.image }} />
                <View style={styles.infoCard}>
                    <Text style={styles.text}>{product?.name}</Text>
                    <Text style={styles.text}>Precio: {product?.unit_price}</Text>
                    <Text style={styles.text}>Stock: {product?.stock}</Text>
                    {product?.stock === 0 ?
                        <View style={styles.detailShop}>
                            <Pressable style={styles.unableDetailView} onPress={() => navigation.navigate('ProductDetail', { id, shopping })}>
                                <Text style={styles.textDetail}>Ver detalle</Text>
                            </Pressable>
                            <View style={styles.unableShoppingCard}>
                                <Icon name='add-shopping-cart' size={20} color={'white'} />
                            </View>
                        </View>
                        :
                        <View style={styles.detailShop}>
                            <Pressable style={styles.detailView} onPress={() => navigation.navigate('ProductDetail', { id, shopping })}>
                                <Text style={styles.textDetail}>Ver detalle</Text>
                            </Pressable>
                            <Pressable onPress={() => setShopping(id)} style={styles.shoppingCard}>
                                <Icon name='add-shopping-cart' size={20} color={'white'} />
                            </Pressable>
                        </View>
                    }
                </View>
            </View>
        </TouchableOpacity>
    );
};

const Store = ({ navigation }) => {
    const [product, setProduct] = useState([]);
    const [shopping, setShopping] = useState()
    console.log('shopping', shopping)
    const fetchProducts = async () => {
        const data = await listAll();
        console.log('data', data)
        setProduct(data.products);
    }
    useEffect(() => {
        fetchProducts();
    }, [shopping]);

    return (
        <View style={styles.safeArea}>
            {shopping ?
                <>
                    <Icon name='shopping-cart' size={30} style={styles.shoppingCart} />
                    <View style={styles.circleCart}><Text style={styles.textCircle}>1</Text></View>
                </>
                :
                <Icon name='shopping-cart' size={30} style={styles.shoppingCart} />
            }
            <View style={styles.container}>
                {/* <Text>Products list</Text> */}
                <FlatList
                    data={product}
                    renderItem={({ item }) => <CardProduct navigation={navigation} product={item} id={item?.id} setShopping={setShopping} shopping={shopping} />}
                    keyExtractor={item => item.id}
                    style={styles.flatList}
                />
            </View>
        </View>
    );
};

export default Store;