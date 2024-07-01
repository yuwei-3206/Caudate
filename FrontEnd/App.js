import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import { UserProvider } from './constants/UserContext';
import { lightTheme, darkTheme } from './constants/Theme';
import { useFonts, Nunito_400Regular, Nunito_700Bold, Nunito_900Black } from '@expo-google-fonts/nunito';

import SignIn from './screens/SignIn';
import Home from './screens/Home';
import Levels from './screens/Levels';
import Game from './screens/Game';
import Score from './screens/Score';
import SignUp from './screens/SignUp';
import TopScores from './screens/TopScores';

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
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="Home">
              {props => <Home {...props} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
            </Stack.Screen>
            <Stack.Screen name="Levels" component={Levels} />
            <Stack.Screen name="Game" component={Game} />
            <Stack.Screen name="Score" component={Score} />
            <Stack.Screen name="TopScores" component={TopScores} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </UserProvider>
  );
};

export default AppNavigator;
