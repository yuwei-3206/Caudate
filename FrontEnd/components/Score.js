import { useEffect } from "react";
import { View, StyleSheet, Dimensions,  TouchableOpacity, Text } from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from "react-native-safe-area-context";
import constantStyles from "../constants";


export default function Score({ navigation, route }) {

  const { score, level } = route.params;

  const createScore = async () => {
    const jsonValue = await AsyncStorage.getItem('user');
    const jsonObject = JSON.parse(jsonValue);

    // Access the username property
    const username = jsonObject.savedUser.username;

    const newScore = {
      username: username,
      score: score,
      level: level,
    }


    try {
      const response = await fetch('http://localhost:3000/api/scores/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newScore),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log('Score saved successfully:', responseData);
      } else {
        console.error('Failed to save score:', response.statusText);
      }
    } catch (error) {
      console.error('Error saving User:', error);
    }
  }
  // get user

  // create on the api
  useEffect(() => {
    if (score) {
      createScore();
    }

  }, []);


  return (
    <SafeAreaView style={constantStyles.safeArea}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", gap: 8, margin: 8 }}>
        <Text style={constantStyles.lightGrayText}>Score</Text>
        <Text style={{ margin: 30, fontSize: 20 }}>{score}s</Text>
      </View>

      <View style={{ alignItems: 'center', padding: 16 }}>
        <TouchableOpacity
          style={constantStyles.kButton}
          onPress={() => navigation.navigate('Game')}>
          <Text style={constantStyles.btnText}>Retry</Text>
        </TouchableOpacity>

        
      </View>
    </SafeAreaView>

  );
}