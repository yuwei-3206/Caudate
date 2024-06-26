import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { UserProvider } from './UserContext';
import { lightTheme, darkTheme } from './Theme';
import { useFonts, Nunito_400Regular, Nunito_700Bold, Nunito_900Black } from '@expo-google-fonts/nunito';

import IntroScreen from './components/IntroScreen';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';
import Game from './components/Game';
import Score from './components/Score';
import SignUp from './components/SignUp';

const Stack = createNativeStackNavigator();

//SplashScreen.preventAutoHideAsync();

const AppNavigator = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_900Black,
  });

  /*const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  useEffect(() => {
    onLayoutRootView();
  }, [fontsLoaded]);*/

  if (!fontsLoaded) {
    return null; // we can use custom loading page too
  }

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const selectedTheme = isDarkMode ? darkTheme : lightTheme;

  return (
    <UserProvider>
      <PaperProvider theme={selectedTheme}>
        <NavigationContainer theme={selectedTheme}>
          <Stack.Navigator initialRouteName="IntroScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="IntroScreen" component={IntroScreen} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="HomeScreen">
              {props => <HomeScreen {...props} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
            </Stack.Screen>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Game" component={Game} />
            <Stack.Screen name="Score" component={Score} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </UserProvider>
  );
};

export default AppNavigator;
