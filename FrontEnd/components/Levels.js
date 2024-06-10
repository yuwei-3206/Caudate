import React from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import constants from "../constants";


export default function Levels({ navigation }) {

  return (
    <SafeAreaView style={[constants.safeArea, { justifyContent: "space-between" }]}>
      <Text style={constants.logoText}>Levels 🪜</Text>
      <View style={{ alignItems: 'center', marginBottom: 10, }}>
        <TouchableOpacity
          style={constants.kButton}
          onPress={() => navigation.navigate('Game')}>
          <Text style={constants.btnText} >Simple ✅ </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={constants.kButton}
          onPress={() => navigation.navigate('Game')}>
          <Text style={constants.btnText}> Medium 🔒</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={constants.kButton}
          onPress={() => navigation.navigate('Game')}>
          <Text style={constants.btnText}> Difficult 😓</Text>
        </TouchableOpacity>

      </View>
      <View style={{ alignItems: 'center', padding: 16 }}>
        <Text style={constants.whiteText} >Caudate 🧠</Text>
        <Text style={constants.lightGrayText}>Improve your life, your attention 👀 , and focus 🧘.</Text>
      </View>
    </SafeAreaView>
  );
}