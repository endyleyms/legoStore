import React, { useEffect, useState } from 'react';
import {Text, TouchableOpacity, View, Image, Pressable, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles'
import { addOne, getOne } from '../../../Services/alternovaStore'


const ProductDetail = ({ route }) => {
    const [product, setProduct] = useState<any>([]);
    // const { id, shopping, } = route?.params;
    const [_shopping, setShopping] = useState<number>(1);
    const [modal, setModal] = useState<boolean>(false);
     const [modalShop, setModalShop] = useState<boolean>(false);

    // const fetchProduct = async () => {
    //     const data= await getOne (id);
    //     setProduct(data);
    // }
    // useEffect(()=>{
    //     fetchProduct();
    // }, [id])

    const shopProduct = async()=>{
        await addOne();
        setModal(false);
    }

    return (
        <View style={styles.safeArea}>
            {_shopping ?
                <>
                    <TouchableOpacity onPress={() => setModal(!modal)}>
                        <Icon name='shopping-cart' size={30} style={styles.shoppingCart} />
                        <View style={styles.circleCart}><Text style={styles.textCircle}>1</Text></View>
                    </TouchableOpacity>
                </>
                :
                <TouchableOpacity onPress={() => setModal(!modal)}>
                    <Icon name='shopping-cart' size={30} style={styles.shoppingCart} />
                </TouchableOpacity>
            }
            <View style={styles.container}>
                <Image source={{ uri: product?.image }} style={styles.image} />
                <View style={styles.containerDetail}>
                    <Text>{product?.name}</Text>
                    <Text>Precio: {product?.unit_price}</Text>
                    <Text>Stock: {product?.stock}</Text>
                    <Text> {product?.description}</Text>
                </View>
                {product?.stock === 0 ?
                    <View style={styles.unableAddToCart}>
                        <Text style={{ color: 'white' }}>Add a product to cart</Text>
                        <Icon name='add-shopping-cart' size={20} color={'white'} />
                    </View>
                    :
                    <Pressable style={styles.AddToCart} onPress={() => setShopping(id)}>
                        <Text style={{ color: 'white' }}>Add product to cart</Text>
                        <Icon name='add-shopping-cart' size={20} color={'white'} />
                    </Pressable>
                }
            </View>
            <Modal visible={modal} transparent={true} >
                <View style={styles.modalContainer}>
                    <Pressable style={styles.closeModal} onPress={() => setModal(false)}>
                        <Icon name='close' size={40} color={'white'} />
                        <Text style={{ color: 'white' }}>Cerrar</Text>
                    </Pressable>
                    <View style={styles.containerCardModal}>
                        <Image style={styles.imageCardModal} source={{ uri: product?.image }} />
                        <View style={styles.infoCard}>
                            <Text style={styles.text}>{product?.name}</Text>
                            <Text style={styles.text}>Precio: {product?.unit_price}</Text>
                            <Text style={styles.text}>Stock: {product?.stock}</Text>
                            <Pressable style={styles.detailView} onPress={shopProduct} >
                                <Text style={styles.textDetail}>Comprar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal visible={modalShop} transparent={true}>
                <Pressable style={styles.modalContainerShop} onPress={()=> setModalShop(false)}>
                    <Text style={{color: '#6b705c', fontSize: 18}}>Su Compra ha sido exitosa</Text>
                    <Icon name='check-circle' size={30} color={'#6b705c'}/>
                    <Icon name='close' size={30} color={'#6b705c'} style={{bottom: 90, left: 90}} />
                </Pressable>
            </Modal>
        </View>
    );
};

export default ProductDetail;