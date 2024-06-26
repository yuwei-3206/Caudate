import React, { useEffect, useState } from "react";
import { View, StyleSheet, Switch, SafeAreaView, Alert, TouchableOpacity } from "react-native";
import { useTheme } from 'react-native-paper';
import { useUser } from '../constants/UserContext';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import globalStyles from '../constants/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home({ navigation, toggleTheme, isDarkMode }) {
  const theme = useTheme();
  const { currentUser, logout } = useUser();
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState(null);

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
                    setUserData(data);
                    console.log('User data: ', data);
                } else {
                    console.error('Failed to fetch user data:', response.status, response.statusText);
                }
            }
        } catch (error) {
            console.error('Error fetching user data:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchUserData();
}, []);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      logout();
      navigation.navigate('IntroScreen');
      console.log('Logout successfully. Current user: ', currentUser);
    } catch (error) {
      console.error('Error logging out:', error);
      Alert.alert('Logout Failed', 'An error occurred while logging out. Please try again.');
    }
  };

  const welcomeText = currentUser ? `Welcome ${currentUser.username}!` : 'Welcome!';

  const handleViewScores = () => {
    const username = currentUser?.username || null;
    navigation.navigate('Score', { username });
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <CustomText style={globalStyles.title}>Caudate 🧠</CustomText> 

      <View style={styles.welcomeContainer}>
        <CustomText style={styles.welcomeText}>{welcomeText}</CustomText>
        <View style={[styles.listContainer, { backgroundColor: theme.colors.primary }]}>
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleViewScores}
            >
              <CustomText style={{ color: theme.colors.text }}>View Your Scores 📈</CustomText>
            </TouchableOpacity>
          </View>
          
          {currentUser ? (
            <View style={styles.item}>
              <TouchableOpacity
                style={styles.button}
                onPress={handleLogout}
              >
                <CustomText style={{ color: theme.colors.text }}>Logout</CustomText>
              </TouchableOpacity>
            </View>              
          ) : (
            <>
              <View style={styles.item}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => navigation.navigate('SignUp')}
                >
                  <CustomText style={{ color: theme.colors.text }}>Sign Up and save your records!</CustomText>
                </TouchableOpacity>
              </View>
            </>
          )}

          <View style={styles.item}>
            <CustomText style={{ color: theme.colors.text, paddingVertical: 15 }}>Switch to {isDarkMode ? "Light" : "Dark"} mode</CustomText>
            <Switch value={isDarkMode} onValueChange={toggleTheme} />
          </View>
        </View>

      </View>

      <View style={globalStyles.bottomContainer}>
        <View style={globalStyles.wrapper}>
          <View style={globalStyles.btnContainer}>
            <CustomButton onPress={() => navigation.navigate('Levels', { username: currentUser?.username })}>
              Let's Go! 🚀
            </CustomButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  welcomeContainer: {
    padding: 20,
  },
  listContainer: {
    marginBottom: 10,
    borderRadius: 10
  },
  welcomeText: {
    fontSize: 18,
    marginBottom: 30,
    paddingLeft: 15
  },
  item: {
    fontSize: 18,
    paddingHorizontal: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  button: {
    width: '100%',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
  },
});
