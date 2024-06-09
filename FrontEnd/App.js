import { Provider as PaperProvider } from 'react-native-paper';
import { lightTheme, darkTheme } from './Theme';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';
import Game from './components/Game';
// import GlobalLeaderboard from './components/GlobalLeaderboard';
// import UserHistory from './components/UserHistory';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const selectedTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <PaperProvider theme={selectedTheme}>
      <NavigationContainer theme={selectedTheme}>
        <Stack.Navigator initialRouteName="IntroScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="IntroScreen" component={IntroScreen} />
          <Stack.Screen name="HomeScreen">
            {props => <HomeScreen {...props} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
          </Stack.Screen>
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen name="Game" component={Game} />
          {/* <Stack.Screen name="GlobalLeaderboard" component={GlobalLeaderboard} />
          <Stack.Screen name="UserHistory" component={UserHistory} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppNavigator;
