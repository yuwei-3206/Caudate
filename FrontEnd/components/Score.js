import React, { useEffect, useState } from "react";
import { View, SafeAreaView, FlatList, StyleSheet, Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import globalStyles from '../GlobalStyles';
import { useUser } from '../UserContext';

const Score = ({ navigation }) => {
  const [gameRecords, setGameRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { currentUser } = useUser();

  useEffect(() => {
    if (currentUser && currentUser.username) {
      fetchGameRecords(currentUser.username);
    } else {
      fetchGameRecords();
    }
  }, [currentUser]);

  const fetchGameRecords = async (username) => {
    try {
      let records = [];

      if (username) {
        const response = await fetch(`http://10.0.0.176:3000/api/scores/${username}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch game records with status ${response.status}`);
        }
        records = await response.json();
      } else {
        const gameRecordsStr = await AsyncStorage.getItem('gameRecords');
        if (gameRecordsStr) {
          records = JSON.parse(gameRecordsStr);
        }
      }

      records.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));

      if (username) {
        records = records.filter(record => record.username === username);
      }

      setGameRecords(records);
      setIsLoading(false);
    } catch (error) {
      console.error('Error fetching game records:', error);
      Alert.alert('Error', 'Failed to fetch game records. Please try again later.');
      setIsLoading(false);
    }
  };

  const renderGameRecord = ({ item }) => {
    const formattedDate = new Date(item.timestamp).toISOString().split('T')[0];
    
    return (
        <View style={styles.recordsRow}>
          <CustomText style={styles.recordsText}>{formattedDate}</CustomText>
          <CustomText style={styles.recordsText}>{item.level}</CustomText>
          <CustomText style={styles.recordsText}>{item.score}s</CustomText>
          
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

  if (!gameRecords.length && (currentUser && currentUser.username)) {
    return (
      <SafeAreaView style={globalStyles.safeArea}>
        <CustomText style={globalStyles.subtitle}>No game records found</CustomText>
        <CustomButton onPress={() => navigation.navigate('Dashboard')}>
          Start Playing 🚀
        </CustomButton>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <CustomText style={globalStyles.title}>Game History</CustomText>

      <View style={styles.recordsView}>
        <View style={styles.recordsRow}>
            <CustomText style={styles.rowText}>Date</CustomText>
            <CustomText style={styles.rowText}>Level</CustomText>
            <CustomText style={styles.rowText}>Score</CustomText>
        </View>

        <FlatList
          data={gameRecords}
          renderItem={renderGameRecord}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>

      <View style={globalStyles.bottomContainer}>
        <View style={globalStyles.wrapper}>
          <View style={globalStyles.btnContainer}>
            <CustomButton onPress={() => navigation.navigate('Dashboard')}>
              Play again 🚀
            </CustomButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  recordsView: {
    paddingBottom: '75%',
    marginHorizontal: 16,
    padding: 20
  },
  recordsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'left',
  },
  recordsText: {
    fontSize: 16,
    paddingBottom: 5,
  },
  rowText: {
    fontSize: 18,
    paddingBottom: 20,
  },
});

export default Score;
