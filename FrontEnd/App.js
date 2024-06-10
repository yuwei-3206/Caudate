import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//tell React that we will implement a navigator
import { NavigationContainer } from "@react-navigation/native";


//create a stack navigator
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useCallback, useEffect } from 'react';
import { View } from 'react-native';

// create a stack navigator
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Levels from './components/Levels';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';
import Game from './components/Game';
// import GlobalLeaderboard from './components/GlobalLeaderboard';
// import UserHistory from './components/UserHistory';

const Stack = createStackNavigator();


  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const selectedTheme = isDarkMode ? darkTheme : lightTheme;
SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Nunito-Black': require('./assets/fonts/Nunito-Black.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

export default function App() {
  return (
    <NavigationContainer>
<<<<<<< HEAD
      <Stack.Navigator>
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
        />
        <Stack.Screen name="Levels" component={Levels} options={{ title: 'Levels' }} />
        <Stack.Screen name="Game" component={Game} options={{ title: 'Game' }} />
        <Stack.Screen name="Score" component={Score} options={{ title: 'Score' }} />
      </Stack.Navigator>
=======
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="Home Screen"
            component={HomeScreen}
          />
          <Stack.Screen name="Levels" component={Levels} options={{ title: 'Levels' }} />
          <Stack.Screen name="Game" component={Game} options={{ title: 'Game' }} />
          <Stack.Screen name="Score" component={Score} options={{ title: 'Score' }} />
        </Stack.Navigator>
      </View>
>>>>>>> bfd54adfda56cf867eb5f4afae30bd23746ea48a
    </NavigationContainer>
  );
};

export default AppNavigator;
