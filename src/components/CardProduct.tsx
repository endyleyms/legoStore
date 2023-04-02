import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const CardProduct = ()=>{
    return(
        <View>
            <View>
                <Text>Image</Text>
            </View>
            <View>
                <Text>Name</Text>
                <Text>Price</Text>
                <Text>Stock</Text>
            </View>
        </View>
    );
};

export default CardProduct;

const styles = StyleSheet.create({})