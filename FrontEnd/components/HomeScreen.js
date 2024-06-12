import React, { useState } from "react";
import { View, StyleSheet, Switch, SafeAreaView } from "react-native";
import { useTheme } from 'react-native-paper';
import CustomButton from './CustomButton';
import CustomText from './CustomText';
import globalStyles from '../GlobalStyles';

export default function HomeScreen({ navigation, toggleTheme, isDarkMode, route }) {
  const theme = useTheme();
  const [username, setUsername] = useState(route.params?.username || '');

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <CustomText style={globalStyles.title}>Caudate 🧠</CustomText>  
      {username ? (
        <View style={styles.welcomeContainer}>
          <CustomText style={styles.welcomeText}>Welcome, {username}!</CustomText>
          <View style={styles.scoreButtonContainer}>
            <CustomButton onPress={() => navigation.navigate('Score', { username })}>
              View Your Scores 📈
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
            <CustomButton onPress={() => navigation.navigate('Dashboard', { username })}>
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
