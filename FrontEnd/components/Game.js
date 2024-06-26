import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, SafeAreaView, Alert, TouchableOpacity, Text } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useUser } from '../UserContext';
import CustomButton from './CustomButton';
import CustomText from './CustomText';
import globalStyles from '../GlobalStyles';

const Game = ({ navigation, route }) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState("");
  const [numbers, setNumbers] = useState([]);
  const { currentUser } = useUser();
  const [level, setLevel] = useState(route.params?.level || "simple");
  

  useEffect(() => {
    const totalButtons = level === "simple" ? 9 : level === "medium" ? 16 : level === "difficult" ? 25 : 9;
    shuffleNumbers(totalButtons);
  }, [route.params?.level]);

  const startGame = () => {
    setProgress(1);
    setResult("");
    setTime(0);
    setRunning(true);
    startTimeRef.current = Date.now();
    intervalRef.current = setInterval(() => {
      setTime(Math.floor((Date.now() - startTimeRef.current) / 1000));
    }, 1000);
  };

  const handlePress = (num) => {
    if (!running) return;
    if (num === progress) {
      if (progress === numbers.length) {
        setResult("Completed!");
        clearInterval(intervalRef.current);
        setRunning(false);

        // Save the game record
        saveGameRecord(time);
      } else {
        setProgress(progress + 1);
      }
    } else {
      setResult("Incorrect!");
    }
  };

  const saveGameRecord = async (time) => {
    try {
      if (!currentUser.username) {
        // Guest user: save record to AsyncStorage
        const gameRecord = {
          score: time,
          level: level,
          timestamp: new Date().toISOString()
        };
        let gameRecords = await AsyncStorage.getItem('gameRecords');
        if (gameRecords) {
          gameRecords = JSON.parse(gameRecords);
          gameRecords.push(gameRecord);
        } else {
          gameRecords = [gameRecord];
        }
        await AsyncStorage.setItem('gameRecords', JSON.stringify(gameRecords));
        console.log('Game record saved locally:', gameRecord);
      } else {
        // Logged-in user: save record to backend
        const gameRecord = {
          username: currentUser.username,
          score: time,
          level: level,
          timestamp: new Date().toISOString()
        };

        const response = await fetch('http://10.0.0.176:3000/api/scores/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(gameRecord),
        });

        if (!response.ok) {
          throw new Error(`Failed to save game record with status ${response.status}`);
        }

        const data = await response.json();
        console.log('Game record saved to backend:', data);
      }
    } catch (error) {
      console.error('Error saving game record:', error);
      Alert.alert('Error', 'Failed to save game record. Please try again later.');
    }
  };

  const shuffleNumbers = (totalButtons) => {
    const shuffledNumbers = Array.from({ length: totalButtons }, (_, index) => index + 1).sort(() => Math.random() - 0.5);
    setNumbers(shuffledNumbers);
  };

  const numColumns = Math.sqrt(numbers.length);

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <CustomText style={globalStyles.subtitle}>Press 1-{numbers.length} in order</CustomText>
      <View style={styles.gridcontainer}>
        {[...Array(numColumns)].map((_, row) => (
          <View key={row} style={{ flexDirection: "row" }}>
            {[...Array(numColumns)].map((_, col) => {
              const index = row * numColumns + col;
              const num = numbers[index];
              const isClickable = running && progress === num;
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() => handlePress(num)}
                  disabled={!isClickable}
                  style={[styles.numBtn, { backgroundColor: isClickable ? "white" : "white", borderColor: isClickable ? "darkgrey" : "darkgrey" }]}
                >
                  <CustomText style={{ color: isClickable ? "red" : "darkgrey" }}>{num}</CustomText>
                </TouchableOpacity>
              );
            })}
          </View>
        ))}
      </View>
      <View style={globalStyles.wrapper}>
        <View style={globalStyles.btnContainer}>
          <CustomButton onPress={startGame} disabled={running}>
            Start Game
          </CustomButton>
        </View>
        <View style={globalStyles.btnContainer}>
          <CustomButton
            onPress={() => navigation.navigate('Score', { level: level, username: currentUser.username })}
            disabled={running}>
            Get Score
          </CustomButton>
        </View>
        <CustomText style={globalStyles.subtitle}>{time}s</CustomText>
        <CustomText style={globalStyles.text}>{result}</CustomText>
      </View>
      <View style={globalStyles.bottomContainer}>
        <View style={globalStyles.wrapper}>
          <View style={globalStyles.btnContainer}>
            <CustomButton onPress={() => navigation.navigate('Dashboard')}>
              Select levels 🚀
            </CustomButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  gridcontainer: {
    alignSelf: 'center',
    marginBottom: 30
  },
  numBtn: {
    width: 75,
    height: 75,
    margin: 0,
    borderRadius: 0,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
});

export default Game;
