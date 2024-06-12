import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import constants from "../constants";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Levels({ navigation }) {

  const createRandomUser = async () => {

    const user = {
      username: "msyl" + Math.random() * 199,
    }

    const jsonValue = await AsyncStorage.getItem('user');

    // check local storage for user
    if (jsonValue === null) {

      try {
        const response = await fetch('http://localhost:3000/api/users/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(user),
        });

        if (response.ok) {
          const responseData = await response.json();
          try {
            let saveUser = await AsyncStorage.setItem(
              'user',
              JSON.stringify(responseData)
            ).then(() => console.log("User ready 😊."))
          } catch (error) {
            console.log("user failed to save to local storage..")
          }
          console.log('User saved successfully:', responseData);
        } else {
          console.error('Failed to save User:', response.statusText);
        }
      } catch (error) {
        console.error('Error saving User:', error);
      }
    } else {
      console.log("Your user name is " + jsonValue)
    }
  }

  useEffect(() => {
    createRandomUser();
  })


  return (
    <SafeAreaView style={[constants.safeArea, { justifyContent: "space-between" }]}>
      <Text style={constants.logoText}>Levels 🪜</Text>
      <View style={{ alignItems: 'center', marginBottom: 10, }}>
        <TouchableOpacity
          style={constants.kButton}
          onPress={() => navigation.navigate('Game')}>
          <Text style={constants.btnText} >Simple ✅ </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={constants.kButton}
          onPress={() => navigation.navigate('Game')}>
          <Text style={constants.btnText}> Medium 🔒</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={constants.kButton}
          onPress={() => navigation.navigate('Game')}>
          <Text style={constants.btnText}> Difficult 😓</Text>
        </TouchableOpacity>

      </View>
      <View style={{ alignItems: 'center', padding: 16 }}>
        <TouchableOpacity
          style={constants.kButton}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Text style={constants.btnText}>Home</Text>
        </TouchableOpacity>

        <Text style={constants.whiteText} >Caudate 🧠</Text>
        <Text style={constants.lightGrayText}>Improve your life, your attention 👀 , and focus 🧘.</Text>
      </View>
    </SafeAreaView>
  );
}