import React, { useState, useEffect } from 'react';
import { View, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useTheme } from 'react-native-paper';
import CustomText from './CustomText';
import CustomButton from './CustomButton';
import globalStyles from '../GlobalStyles';

const TopScoresScreen = ({ navigation, route }) => {
  const { level } = route.params;
  const theme = useTheme();
  const [topScores, setTopScores] = useState([]);

  useEffect(() => {
    fetchTopScores();
  }, []);

  const fetchTopScores = async () => {
    try {
      const response = await fetch(`http://10.0.0.176:3000/api/scores/top/${level}`);
      if (!response.ok) {
        throw new Error('Failed to fetch top scores');
      }
      let data = await response.json();
      data.sort((a, b) => a.score - b.score);
      setTopScores(data);
    } catch (error) {
      console.error('Error fetching top scores:', error);
      // Handle error (show alert, retry mechanism, etc.)
    }
  };
  
  const renderScoreItem = ({ item }) => (
        <View style={styles.recordsRow}>
          <CustomText style={styles.recordsText}>{item.username}</CustomText>
          <CustomText style={styles.recordsText}>{item.score}s</CustomText>
        </View>
  );

  return (
    <SafeAreaView style={[globalStyles.safeArea, { backgroundColor: theme.colors.background }]}>
      <CustomText style={[globalStyles.subtitle, { color: theme.colors.text }]}>Top Global Scores - {level}</CustomText>
      <View style={styles.recordsView}>

        <View style={styles.recordsRow}>
            <CustomText style={styles.rowText}>Username</CustomText>
            <CustomText style={styles.rowText}>Time</CustomText>
        </View>

        <FlatList
            data={topScores}
            keyExtractor={(item, index) => `${item._id}-${index}`}
            renderItem={renderScoreItem}
            //contentContainerStyle={styles.listContainer}
        />
      </View>

      <View style={globalStyles.bottomContainer}>
        <View style={globalStyles.wrapper}>
          <View style={globalStyles.btnContainer}>
            <CustomButton onPress={() => navigation.navigate('Dashboard')}>
              New Game 🚀
            </CustomButton>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingBottom: 20
    },
    recordsView: {
        padding: 20,
        marginHorizontal: 16,
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
    }
});

export default TopScoresScreen;
