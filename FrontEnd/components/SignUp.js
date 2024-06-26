import React, { useState } from "react";
import { View, StyleSheet, TextInput, Alert } from "react-native";
import CustomText from './CustomText';
import CustomButton from './CustomButton';

export default function SignUp({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://10.0.0.176:3000/api/users/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
  
      if (response.ok) {
        // Display success alert
        Alert.alert(
          'Signed up successfully!',
          'You can now log in',
          [
            { text: 'OK', onPress: () => navigation.navigate('IntroScreen') }
          ]
        );
      } else {
        const errorData = await response.json();
        console.error('Failed to create user:', errorData);
        // Handle error appropriately, e.g., display error message to the user
      }
    } catch (error) {
      console.error('Error creating user:', error);
      // Handle error appropriately, e.g., display error message to the user
    }
  };

  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Sign Up</CustomText>
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
        <CustomButton onPress={handleSignUp}>Sign Up</CustomButton>
      </View>
    </View>
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
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
