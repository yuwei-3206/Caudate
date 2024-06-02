import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from 'react-native-paper';


export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", gap:8, margin:8 }}>
        <Text style={{margin:30, fontSize:20}}>Levels </Text>  
        <Button mode="contained" onPress={() => navigation.navigate('Game')}>Simple ✅</Button>  
        <Button mode="contained" onPress={() => navigation.navigate('Game')}>Medium 🔒</Button>  
        <Button mode="contained" onPress={() => navigation.navigate('Game')}>Difficult 😓</Button>  
        <Text >Caudate 🧠</Text>  
        <Text>Improve your life, your attention 👀 , and focus 🧘.</Text>
      </View>
  
    );
  }