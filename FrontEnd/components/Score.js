import { useEffect } from "react";
import { View, SafeAreaView } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomButton from './CustomButton';
import CustomText from './CustomText';
import globalStyles from '../GlobalStyles';


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
    <SafeAreaView style={globalStyles.safeArea}>
      <CustomText style={globalStyles.subtitle}>Score</CustomText>
      <CustomText style={{ margin: 30, fontSize: 20 }}>{score}s</CustomText>

      <View style={globalStyles.bottomContainer}>
        <View style={globalStyles.wrapper}>
          <View style={globalStyles.btnContainer}>
            <CustomButton onPress={() => navigation.navigate('Game',  { level })}>
              Retry 🚀
            </CustomButton>
          </View>
        </View>
      </View>
    </SafeAreaView>

  );
}