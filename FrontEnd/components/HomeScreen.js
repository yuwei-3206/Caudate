import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from 'react-native-paper';


export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
        <Text style={{margin:30, fontSize:20}}>Caudate 🧠</Text>  
        <Button mode="contained" onPress={() => navigation.navigate('Levels')}>Let's Go! 🚀</Button>  
      </View>
  
    );
  }