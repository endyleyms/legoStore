import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Login = ({navigation})=>{
    const [name, setName] = useState('');
    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.create}>LOGIN</Text>
        <Text style={styles.login}>sign in to continue</Text>
        {/* Form container */}
            <View style={styles.containerForm}>
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
                        <Text style={styles.textButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </SafeAreaView>
    );
};

export default Login;