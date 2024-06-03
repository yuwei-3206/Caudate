//tell React that we will implement a navigator
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useCallback, useState } from 'react';
import * as Font from 'expo-font';



//create a stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Levels from './Levels';
import HomeScreen from './HomeScreen';
import Game from './Game';
import Score from './Score';


SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();


export default function App() {
  const [IsReady, SetIsReady] = useState(false);

  const useFonts = async () =>
    await Font.loadAsync({
      'Nunito-Black': require('./assets/fonts/Nunito-Black.ttf'),
    });

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!IsReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => SetIsReady(true)}
        onError={() => { }}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
        />
        <Stack.Screen name="Levels" component={Levels} options={{ title: 'Levels' }} />
        <Stack.Screen name="Game" component={Game} options={{ title: 'Game' }} />
        <Stack.Screen name="Score" component={Score} options={{ title: 'Score' }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}
