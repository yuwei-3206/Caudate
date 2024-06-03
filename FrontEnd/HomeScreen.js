import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import constants from "./constants";

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={constants.safeArea}>
      <View style={styles.view}>
        <Text style={styles.logoText}>Caudate 🧠</Text>
        <TouchableOpacity
          style={constants.kButton}
          onPress={() => navigation.navigate('Levels')}
        >
          <Text style={constants.btnText}>Let's Go! 🚀</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({

  view: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoText: {
    color: "white",
    fontFamily: 'Nunito-Black',
    margin: 30,
    fontSize: 40,
    alignSelf: "center"
  },

});