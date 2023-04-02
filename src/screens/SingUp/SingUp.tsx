import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const SingUp = ({navigation}) => {
    const [name, setName] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.create}>CREATE A NEW ACCOUNT</Text>
            <TouchableOpacity  onPress={() => navigation.navigate('LogIn')}><Text style={styles.login}>Already registered? Log in here</Text></TouchableOpacity>
            {/* Form container */}
                <View style={styles.containerForm}>
                    <Text style={styles.text}>NAME</Text>
                    <TextInput
                        value={name}
                        onChangeText={text => setName(text)}
                        placeholder="Name"
                        placeholderTextColor={'#4D4C4C'}
                        style={styles.input} />
                    <Text style={styles.text}>EMAIL</Text>
                    <TextInput
                        value={name}
                        onChangeText={text => setName(text)}
                        placeholder="Email"
                        placeholderTextColor={'#4D4C4C'}
                        style={styles.input} />
                    <Text style={styles.text}>PASSWORD</Text>
                    <TextInput
                        value={name}
                        onChangeText={text => setName(text)}
                        secureTextEntry={true}
                        placeholder="*****"
                        placeholderTextColor={'#4D4C4C'}
                        style={styles.input} />
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                        <Text style={styles.textButton}>Sing Up</Text>
                    </TouchableOpacity>
                </View>
                </View>
        </SafeAreaView>
    );
};

export default SingUp;