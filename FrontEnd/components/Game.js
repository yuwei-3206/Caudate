import React, { useState, useRef, useEffect } from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';

const Game = ({ navigation, route }) => {
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

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start", gap: 8, margin: 8 }}>
      <Text style={{ margin: 30, fontSize: 20 }}>Press 1-{numbers.length} in order</Text>

      <View>
        {[...Array(Math.sqrt(numbers.length))].map((_, row) => (
          <View key={row} style={{ flexDirection: "row" }}>
            {[...Array(Math.sqrt(numbers.length))].map((_, col) => {
              const index = row * Math.sqrt(numbers.length) + col;
              const num = numbers[index];
              return (
                <Button
                  key={index}
                  mode="contained"
                  onPress={() => handlePress(num)}
                  disabled={!running || progress !== num}
                  style={{ margin: 4 }}
                >
                  {num}
                </Button>
              );
            })}
          </View>
        ))}
      </View>

      <Button mode="contained" onPress={startGame} disabled={running}>
        Start Game
      </Button>
      <Button mode="contained" onPress={() => navigation.navigate('Score')} disabled={running}>
        Get Score
      </Button>
      <Text>{time}s</Text>
      <Text>{result}</Text>
    </View>
  );
};

export default Game;
