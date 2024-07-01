import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Alert, SafeAreaView } from "react-native";
import { TextInput, useTheme } from 'react-native-paper';
import { useUser } from '../UserContext';
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import globalStyles from '../GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function IntroScreen({ navigation }) {
    const { selectUser, currentUser } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const theme = useTheme();

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

            const data = await response.json();
    
            if (response.status === 200) {
                console.log('Login successful:', data);
                
                // Save token and set user context
                await AsyncStorage.setItem('userToken', data.token);
                selectUser(data.username);
            } else {
                console.error(`Login failed with status ${response.status}`);
                Alert.alert('Login failed', data.message || 'An error occurred. Please try again.');
            }
        } catch (error) {
            console.error('Login error:', error);
            Alert.alert('Login error', 'An error occurred. Please try again.');
        }
    };

    const handleEnterAsGuest = () => {
        selectUser(null);
        navigation.navigate('HomeScreen');
    };

    useEffect(() => {
        if (currentUser) {
            console.log('Current User:', currentUser);
            navigation.replace('HomeScreen');
        }
    }, [currentUser]);
    

    return (
        <SafeAreaView style={styles.container}>
            <CustomText style={styles.title}>Caudate 🧠</CustomText>
            <View style={styles.formContainer}>
                <TextInput
                    style={[styles.input, { backgroundColor: theme.colors.background, color: theme.colors.text }]}
                    placeholder="Username"
                    placeholderTextColor={theme.colors.text}
                    onChangeText={text => setUsername(text)}
                    value={username}
                    theme={{ colors: { text: theme.colors.text } }}
                />
                <TextInput
                    style={[styles.input, { backgroundColor: theme.colors.background, color: theme.colors.text }]}
                    placeholder="Password"
                    placeholderTextColor={theme.colors.text}
                    onChangeText={text => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    theme={{ colors: { text: theme.colors.text } }}
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
            <TouchableOpacity onPress={handleEnterAsGuest}>
                <CustomText style={[globalStyles.text, {textDecorationLine: 'underline'}]}>Enter as guest</CustomText>
            </TouchableOpacity>
        </SafeAreaView>
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
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
