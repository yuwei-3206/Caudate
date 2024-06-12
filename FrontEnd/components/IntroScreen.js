import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Animated, TextInput, TouchableOpacity, Alert } from "react-native";
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import globalStyles from '../GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function IntroScreen({ navigation }) {
    //const fadeAnim = useRef(new Animated.Value(0)).current;
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    /*useEffect(() => {
        const timer = setTimeout(() => {
            // Fade in
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true,
            }).start(() => {
                // Fade out
                Animated.timing(fadeAnim, {
                    toValue: 0,
                    duration: 1000,
                    useNativeDriver: true,
                }).start(() => {
                    navigation.navigate('HomeScreen');
                });
            });
        }, 3000);

        return () => clearTimeout(timer);
    }, []);*/

    const handleLogin = async () => {
        try {
            const response = await fetch('http://10.0.0.176:3000/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                console.error(`Login failed with status ${response.status}`);
                Alert.alert('Login failed', 'An error occurred. Please try again.');
                return;
            }

            const data = await response.json();
            console.log('Login successful:', data);

            navigation.navigate('HomeScreen', { username });
        } catch (error) {
            console.error('Login error:', error);
            Alert.alert('Login error', 'An error occurred. Please try again.');
        }
    };


    return (
        <Animated.View style={styles.container}>
            <CustomText style={styles.title}>Caudate 🧠</CustomText>
            <View style={styles.formContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Username"
                    onChangeText={text => setUsername(text)}
                    value={username}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                />
                <CustomButton onPress={handleLogin}>Login</CustomButton>
            </View>

            <View style={styles.rowContainer}>
                <CustomText>Don't have an account? </CustomText>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <CustomText style={[globalStyles.text, {textDecorationLine: 'underline'}]}>Sign Up!</CustomText>
                </TouchableOpacity>
            </View>

            <CustomText> or </CustomText>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <CustomText style={[globalStyles.text, {textDecorationLine: 'underline'}]}>Enter as guest</CustomText>
            </TouchableOpacity>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
    },
    formContainer: {
        marginTop: 20,
    },
    input: {
        width: 300,
        height: 40,
        borderColor: 'white',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
