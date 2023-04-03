import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { getAuth, signInWithEmailAndPassword, } from "firebase/auth";
import firebaseModule from '../../../firebase';

const Login = ({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPasswor] = useState('');

    const handleSigIn  =  () =>{
        const auth = getAuth(firebaseModule.app);
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user.email)
            navigation.navigate('Home', {
              params:{
                user: user }
            })
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(error)
          })
      }


    return(
        <SafeAreaView style={styles.container}>
        <Text style={styles.create}>LOGIN</Text>
        <Text style={styles.login}>sign in to continue</Text>
        {/* Form container */}
            <View style={styles.containerForm}>
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
                    <TouchableOpacity style={styles.button} onPress={handleSigIn}>
                        <Text style={styles.textButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </SafeAreaView>
    );
};

export default Login;