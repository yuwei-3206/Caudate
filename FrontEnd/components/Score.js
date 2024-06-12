import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import globalStyles from '../GlobalStyles';

const Score = ({ navigation, route }) => {
  const { username } = route.params || {};
  const [gameRecords, setGameRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    fetchGameRecords();
  }, []);

  const fetchGameRecords = async () => {
    try {
      let records = [];

      if (username) {
        // Fetch authenticated user records from backend
        const response = await fetch(`http://10.0.0.176:3000/api/scores/${username}`);
        if (!response.ok) {
          console.error(`Failed to fetch game records with status ${response.status}`);
          Alert.alert('Error', 'Failed to fetch game records. Please try again later.');
          setIsLoading(false);
          return;
        }
        records = await response.json();
      } else {
        // Fetch guest user records from local storage
        const gameRecordsStr = await AsyncStorage.getItem('gameRecords');
        if (gameRecordsStr) {
          records = JSON.parse(gameRecordsStr);
        }
      }

      // Sort and limit records to display
      records.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      records = records.slice(0, 5);

      // Filter records by username if available
      if (username) {
        records = records.filter(record => record.username === username);
      }

      setGameRecords(records);
      setIsLoading(false); // Set loading state to false after fetching records
    } catch (error) {
      console.error('Error fetching game records:', error);
      Alert.alert('Error', 'Failed to fetch game records. Please try again later.');
      setIsLoading(false); // Set loading state to false on error
    }
  };

  const renderGameRecord = ({ item }) => {
    return (
      <View style={styles.item}>
        <CustomText style={styles.scoreText}>Score: {item.score}s</CustomText>
        <CustomText style={styles.levelText}>Level: {item.level}</CustomText>
        <CustomText style={styles.timestampText}>Timestamp: {item.timestamp}</CustomText>
      </View>
    );
  };

  if (isLoading) {
    return (
      <SafeAreaView style={globalStyles.safeArea}>
        <CustomText style={globalStyles.title}>Loading...</CustomText>
      </SafeAreaView>
    );
  }

  if (!gameRecords.length && username) {
    return (
      <SafeAreaView style={globalStyles.safeArea}>
        <CustomText style={globalStyles.subtitle}>No game records found.</CustomText>
        <CustomButton onPress={() => navigation.navigate('Game')}>
          Retry 🚀
        </CustomButton>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <CustomText style={globalStyles.title}>Game Records</CustomText>
      <FlatList
        data={gameRecords}
        renderItem={renderGameRecord}
        keyExtractor={(item, index) => index.toString()}
      />

      <View style={globalStyles.bottomContainer}>
        <View style={globalStyles.wrapper}>
          <View style={globalStyles.btnContainer}>
            <CustomButton onPress={() => navigation.navigate('Game')}>
              Retry 🚀
            </CustomButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  scoreText: {
    fontSize: 16,
  },
  levelText: {
    fontSize: 14,
    marginTop: 5,
  },
  timestampText: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default Score;
