import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';

import Toast from 'react-native-simple-toast';

import styles from '../styles/styles';

import { dh, dw } from '../styles/dhdw';

import { client_login } from '../actions';

import {
    BallIndicator
} from 'react-native-indicators';

import Spinner from 'react-native-loading-spinner-overlay';


function Login(props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();

    let textInput = null;

    const loading = useSelector((state) => state.loginReducer.loading);

    const handleSubmit = () => {

        console.log(email)

        let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email == "") {
            Toast.show("Please enter Email");
        }

        else if (reg.test(email) === false) {
            Toast.show("Please Enter Correct Email");
        }

        else if (password == '') {
            Toast.show("Please enter Password");

        }

        else {

            dispatch(client_login(email, password));
        }

    };

    return (
        // Main Container
        <SafeAreaView style={styles.container}>

            <View style={{ flex: 0.6 }}>

            </View>

            <View style={{ flex: 1.2 }}>

                <View style={{ flex: 0.2 }}>

                    <Text style={{ textAlign: "center", color: "#000000", fontSize: dh(3.5), fontWeight: "bold" }}>Have an Account?</Text>

                </View>

                <View style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>

                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>

                        <TextInput keyboardType={"email-address"} onChangeText={email => setEmail(email)} returnKeyType={"next"} onSubmitEditing={() => { textInput.focus(); }} placeholder={"Enter Email"} placeholderTextColor={"black"} style={styles.loginTextInput}>

                        </TextInput>

                        <TextInput secureTextEntry={true} onChangeText={password => setPassword(password)} ref={(input) => { textInput = input }} placeholder={"Enter Password"} placeholderTextColor={"black"} style={styles.loginTextInput}>

                        </TextInput>

                    </View>

                    <View style={{ flex: 0.5, justifyContent: "center", alignItems: "center", paddingBottom: dh(3) }}>

                        <TouchableOpacity onPress={handleSubmit} style={{ width: dw(80), height: dh(9), backgroundColor: "black", borderRadius: 35, justifyContent: "center", alignItems: "center" }}>

                            <Text style={{ color: "white", fontSize: dh(3.5) }}>Login</Text>

                        </TouchableOpacity>

                    </View>

                </View>

            </View>

            <View style={{ flex: 0.6 }}>

            </View>

            <Spinner
                visible={loading}
                customIndicator={<BallIndicator color='#000000' />}
            />

        </SafeAreaView>
    )

}

// Export Main function or class
export default Login;