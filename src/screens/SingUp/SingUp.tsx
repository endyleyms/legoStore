import React, { useState } from 'react';
import { Pressable, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import firebaseModule from '../../../firebase';

const SingUp = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPasswor] = useState('');

    const handleCreateUser  = async () =>{
        const auth = getAuth(firebaseModule.app);
        await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(auth.currentUser,{
          displayName: name
        })
        navigation.navigate('Home')
      }
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
                        value={email}
                        onChangeText={text => setEmail(text)}
                        placeholder="Email"
                        placeholderTextColor={'#4D4C4C'}
                        style={styles.input} />
                    <Text style={styles.text}>PASSWORD</Text>
                    <TextInput
                        value={password}
                        onChangeText={text => setPasswor(text)}
                        secureTextEntry={true}
                        placeholder="*****"
                        placeholderTextColor={'#4D4C4C'}
                        style={styles.input} />
                <View style={styles.containerButton}>
                    <TouchableOpacity style={styles.button} onPress={handleCreateUser}>
                        <Text style={styles.textButton}>Sing Up</Text>
                    </TouchableOpacity>
                </View>
                </View>
        </SafeAreaView>
    );
};

export default SingUp;