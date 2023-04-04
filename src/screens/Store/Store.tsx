import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Image, FlatList, Pressable, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import { addOne, getOne, listAll } from '../../../Services/alternovaStore'

interface inputProps {
    navigation: any,
    product: any,
    id: number,
    setShopping: CallableFunction,
    shopping: boolean,
    setIdProduct: CallableFunction
}

const CardProduct = ({ navigation, product, id, setShopping, shopping, setIdProduct }: inputProps) => {

    setIdProduct(id);
    return (
        <TouchableOpacity style={styles.containerGeneral} onPress={() => navigation.navigate('ProductDetail', { id, shopping })}>
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
    const [products, setProducts] = useState<any>([]);
    const [product, setProduct] = useState<any>([]);
    const [shopping, setShopping] = useState<boolean>(false);
    const [idProduct, setIdProduct] = useState<number>();
    const [modal, setModal] = useState<boolean>(false);
    const [modalShop, setModalShop] = useState<boolean>(false);

    const fetchProducts = async () => {
        const data = await listAll();
        setProducts(data.products);
    }
    const fetchProduct = async () => {
       const data= await getOne (idProduct);
       setProduct(data);
   }
    useEffect(() => {
        fetchProducts();
        fetchProduct();
    }, [shopping, idProduct]);

    const shopProduct = async()=>{
        // await addOne();
        setModal(false);
        setModalShop(true);
    }


    return (
        <View style={styles.safeArea}>
            {shopping ?
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
                <FlatList
                    data={products}
                    renderItem={({ item }) => <CardProduct navigation={navigation} product={item} id={item?.id} setShopping={setShopping} shopping={shopping} setIdProduct={setIdProduct}/>}
                    keyExtractor={item => item.id}
                    style={styles.flatList}
                />
            </View>
            <Modal visible={modal} transparent={true} >
                <View style={styles.modalContainer}>
                    <Pressable style={styles.closeModal} onPress={()=>setModal(false)}>
                        <Icon name='close' size={40} color={'white'}/>
                        <Text style={{color:'white'}}>Cerrar</Text>
                    </Pressable>
                    <View style={styles.containerCardModal}>
                        <Image style={styles.imageCardModal} source={{ uri: product?.image }} />
                        <View style={styles.infoCard}>
                            <Text style={styles.text}>{product?.name}</Text>
                            <Text style={styles.text}>Precio: {product?.unit_price}</Text>
                            <Text style={styles.text}>Stock: {product?.stock}</Text>
                            <Pressable style={styles.detailView} onPress={shopProduct}>
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

export default Store;