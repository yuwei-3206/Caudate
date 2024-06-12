import React from "react";
import { View, StyleSheet, Switch, SafeAreaView } from "react-native";
import { useTheme } from 'react-native-paper';
import CustomButton from './CustomButton';
import CustomText from './CustomText';
import globalStyles from '../GlobalStyles';

export default function HomeScreen({ navigation, toggleTheme, isDarkMode }) {
  const theme = useTheme();

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <CustomText style={globalStyles.title}>Caudate 🧠</CustomText>  
      <View style={styles.switchContainer}>
        <Switch value={isDarkMode} onValueChange={toggleTheme} />
      </View>

      <View style={globalStyles.bottomContainer}>
        <View style={globalStyles.wrapper}>
          <View style={globalStyles.btnContainer}>
            <CustomButton onPress={() => navigation.navigate('Dashboard')}>
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
});