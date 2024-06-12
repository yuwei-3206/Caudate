import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, SafeAreaView } from "react-native";
import { Button } from 'react-native-paper';
import CustomButton from './CustomButton';
import CustomText from './CustomText';
import globalStyles from '../GlobalStyles';

export default function Game({ navigation, route }) {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const intervalRef = useRef(null);
  const startTimeRef = useRef(0);
  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState("");
  const [numbers, setNumbers] = useState([]);

  useEffect(() => {
    const level = route.params?.level || "simple";
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
        setResult("Complete!");
        clearInterval(intervalRef.current);
        setRunning(false);
      } else {
        setProgress(progress + 1);
      }
    } else {
      setResult("Incorrect!");
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
                  <Button
                    key={index}
                    mode="contained"
                    onPress={() => handlePress(num)}
                    disabled={!isClickable}
                    style={[styles.numBtn, { backgroundColor: isClickable ? "white" : "white", borderColor: isClickable ? "darkgrey" : "darkgrey" }]}
                    labelStyle={{ color: isClickable ? "red" : "darkgrey" }}
                  >
                    {num}
                  </Button>
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
              onPress={() => navigation.navigate('Score', { score: time, level: route.params?.level || "simple" })} disabled={running}>
              Get Score
            </CustomButton>
          </View>

          <CustomText style={globalStyles.subtitle}>{time}s</CustomText>
          <CustomText style={globalStyles.subtitle}>{result}</CustomText>
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
