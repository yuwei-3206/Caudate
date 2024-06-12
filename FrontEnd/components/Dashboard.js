import React, { useEffect } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import CustomButton from './CustomButton';
import CustomText from './CustomText';
import globalStyles from '../GlobalStyles';
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
    <SafeAreaView style={globalStyles.safeArea}>
      <CustomText style={globalStyles.title}>Levels 🪜</CustomText>

      <View style={globalStyles.wrapper}>
        <View style={globalStyles.btnContainer}>
          <CustomButton onPress={() => navigation.navigate('Game', { level: 'simple' })} style={globalStyles.btn}>
            Simple ✅
          </CustomButton>
        </View>

        <View style={globalStyles.btnContainer}>
          <CustomButton onPress={() => navigation.navigate('Game', { level: 'medium' })} style={globalStyles.btn}>
            Medium 🔒
          </CustomButton>
        </View>

        <View style={globalStyles.btnContainer}>
          <CustomButton onPress={() => navigation.navigate('Game', { level: 'difficult' })} style={globalStyles.btn}>
            Difficult 😓
          </CustomButton>
        </View>
      </View>

      <View style={globalStyles.bottomContainer}>
        <CustomText style={globalStyles.subtitle}>Caudate 🧠</CustomText>  
        <CustomText style={globalStyles.text}>Improve your life, your attention 👀 , and focus 🧘</CustomText>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  bottomContainer: {
    justifyContent: 'flex-end',
},
});