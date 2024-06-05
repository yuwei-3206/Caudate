import React from "react";
import { View, Text, StyleSheet, Switch, Dimensions } from "react-native";
import { useTheme } from 'react-native-paper';
import CustomButton from './CustomButton';
import CustomText from './CustomText';

const { width } = Dimensions.get('window');

export default function HomeScreen({ navigation, toggleTheme, isDarkMode }) {
  const theme = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <CustomText style={styles.title}>Caudate 🧠</CustomText>  
      <Switch
        value={isDarkMode}
        onValueChange={toggleTheme}
        style={styles.switch}
      />
      <View style={styles.buttonContainer}>
        <CustomButton onPress={() => navigation.navigate('Dashboard')} style={styles.button}>
          Let's Go! 🚀
        </CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "flex-start",
    paddingTop: 30,
  },
  title: {
    margin: 30, 
    fontSize: 25,
  },
  switch: {
    marginBottom: 30,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '80%',
  },
  button: {
    width: '100%',
  },
});
