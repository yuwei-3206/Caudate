import React from "react";
import { View, StyleSheet } from "react-native";
import CustomButton from './CustomButton';
import CustomText from './CustomText';

export default function Dashboard({ navigation }) {
  return (
    <View style={styles.container}>
      <CustomText style={styles.title}>Levels 🪜</CustomText>  
        
      <CustomButton onPress={() => navigation.navigate('Game', { level: 'simple' })}>
        Simple ✅
      </CustomButton>  
      <CustomButton onPress={() => navigation.navigate('Game', { level: 'medium' })}>
        Medium 🔒
      </CustomButton>  
      <CustomButton onPress={() => navigation.navigate('Game', { level: 'difficult' })}>
        Difficult 😓
      </CustomButton>  
          
      <CustomText>Caudate 🧠</CustomText>  
      <CustomText>Improve your life, your attention 👀 , and focus 🧘.</CustomText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "flex-start",
    gap: 8, 
    margin: 8,
  },
  title: {
    margin: 30, 
    fontSize: 20,
  },
});
