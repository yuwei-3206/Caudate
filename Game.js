import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Button } from 'react-native-paper';


export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", gap:8, margin:8 }}>
        <Text style={{margin:30, fontSize:20}}>Simple 3x3</Text>


              <View style={{ alignItems: "flex-start", justifyContent: "center", flexDirection:"row", gap:16, margin:8 }}>
                <Button mode="contained" onPress={() => navigation.navigate('Score')}>1</Button>  
                <Button mode="contained" onPress={() => navigation.navigate('Score')}>2</Button>  
                <Button mode="contained" onPress={() => navigation.navigate('Score')}>3</Button>  
            </View>
            <View style={{ alignItems: "flex-start", justifyContent: "center", flexDirection:"row", gap:16, margin:8 }}>
                <Button mode="contained" onPress={() => navigation.navigate('Score')}>4</Button>  
                <Button mode="contained" onPress={() => navigation.navigate('Score')}>5</Button>  
                <Button mode="contained" onPress={() => navigation.navigate('Score')}>6</Button>  
            </View>
            <View style={{ alignItems: "flex-start", justifyContent: "center", flexDirection:"row", gap:16, margin:8 }}>
                <Button mode="contained" onPress={() => navigation.navigate('Score')}>7</Button>  
                <Button mode="contained" onPress={() => navigation.navigate('Score')}>8</Button>  
                <Button mode="contained" onPress={() => navigation.navigate('Score')}>9</Button>  
            </View>
  

        <Button mode="contained" onPress={() => navigation.navigate('Score')}>Get Score</Button>  
      </View>
  
    );
  }