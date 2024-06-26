import React, { useEffect } from "react";
import { View, StyleSheet, Switch, SafeAreaView, Alert } from "react-native";
import { useTheme } from 'react-native-paper';
import { useUser } from '../UserContext';
import CustomButton from './CustomButton';
import CustomText from './CustomText';
import globalStyles from '../GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation, toggleTheme, isDarkMode }) {
  const theme = useTheme();
  const { currentUser, selectUser, logout } = useUser();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = await AsyncStorage.getItem('userToken');
        if (token) {
          const response = await fetch('http://10.0.0.176:3000/api/users/me', {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            selectUser(data.username);
          }
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [selectUser]);

  const handleLogout = async () => {
    try {
      // Clear token from AsyncStorage
      await AsyncStorage.removeItem('userToken');
      // Clear currentUser in context
      logout(currentUser.username);
      // Navigate to intro screen
      navigation.navigate('IntroScreen');
    } catch (error) {
      console.error('Error logging out:', error);
      Alert.alert('Logout Failed', 'An error occurred while logging out. Please try again.');
    }
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <CustomText style={globalStyles.title}>Caudate 🧠</CustomText>  
      {currentUser ? (
        <View style={styles.welcomeContainer}>
          <CustomText style={styles.welcomeText}>Welcome {currentUser.username}!</CustomText>
          <View style={styles.scoreButtonContainer}>
            <CustomButton onPress={() => navigation.navigate('Score', { username: currentUser.username })}>
              View Your Scores 📈
            </CustomButton>
          </View>

          <View style={styles.logoutButtonContainer}>
            <CustomButton onPress={handleLogout}>
              Logout
            </CustomButton>
          </View>

        </View>
      ) : null}
      <View style={styles.switchContainer}>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      <View style={globalStyles.bottomContainer}>
        <View style={globalStyles.wrapper}>
          <View style={globalStyles.btnContainer}>
            <CustomButton onPress={() => navigation.navigate('Dashboard', { username: currentUser?.username })}>
              Let's Go! 🚀
            </CustomButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  switchContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 10,
  },
  scoreButtonContainer: {
    marginBottom: 10,
  },
});
