import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from 'react-native-paper';


export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", gap: 8, margin: 8 }}>
      <Text style={{ margin: 30, fontSize: 20 }}>Score</Text>
      <Text style={{ margin: 30, fontSize: 20 }}>20 s</Text>

    </View>

  );
}