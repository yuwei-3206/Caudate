import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//tell React that we will implement a navigator
import { NavigationContainer } from "@react-navigation/native";


//create a stack navigator
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

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home Screen"
          component={HomeScreen}
        />
        <Stack.Screen name="Levels" component={Levels} options={{ title: 'Levels' }} />
        <Stack.Screen name="Game" component={Game} options={{ title: 'Game' }} />
        <Stack.Screen name="Score" component={Score} options={{ title: 'Score' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
