import React, { useEffect } from "react";
import { View, SafeAreaView, StyleSheet } from "react-native";
import CustomButton from './CustomButton';
import CustomText from './CustomText';
import globalStyles from '../GlobalStyles';
import { IconButton, useTheme } from 'react-native-paper';
import { useUser } from '../UserContext';

export default function Levels({ navigation }) {

  const { currentUser } = useUser();
  const theme = useTheme();
/*
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
*/

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <CustomText style={globalStyles.title}>Levels 🪜</CustomText>

      <View style={globalStyles.wrapper}>
        <View style={globalStyles.btnContainer}>
          <CustomButton onPress={() => navigation.navigate('Game', { level: 'simple', username: currentUser?.username || null })} style={globalStyles.btn}>
            Simple ✅
          </CustomButton>
        </View>

        <View style={globalStyles.btnContainer}>
          <CustomButton onPress={() => navigation.navigate('Game', { level: 'medium', username: currentUser?.username || null })} style={globalStyles.btn}>
            Medium 🔒
          </CustomButton>
        </View>

        <View style={globalStyles.btnContainer}>
          <CustomButton onPress={() => navigation.navigate('Game', { level: 'difficult', username: currentUser?.username || null })} style={globalStyles.btn}>
            Difficult 😓
          </CustomButton>
        </View>
      </View>

      <View style={globalStyles.bottomContainer}>
        <View style={globalStyles.rowView}>
          <IconButton
              icon="home"
              color={theme.colors.button.text}
              size={30}
              style={{ backgroundColor: theme.colors.button.background, borderRadius: 50 }}
              onPress={() => navigation.navigate('HomeScreen')}
          />
          <IconButton
            icon="trophy"
            color={theme.colors.button.text}
            size={30}
            style={{ backgroundColor: theme.colors.button.background, borderRadius: 50 }}
            onPress={() => navigation.navigate('Score', { username: currentUser?.username || null })}
          />
        </View>
        <CustomText style={globalStyles.subtitle}>Caudate 🧠</CustomText>  
        <CustomText style={globalStyles.text}>Improve your life, your attention 👀 , and focus 🧘</CustomText>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});