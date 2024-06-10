import { Provider as PaperProvider } from 'react-native-paper';
import { lightTheme, darkTheme } from './Theme';
import { useFonts, Nunito_400Regular, Nunito_700Bold, Nunito_900Black } from '@expo-google-fonts/nunito';

// Create a stack navigator
//import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IntroScreen from './components/IntroScreen';
import HomeScreen from './components/HomeScreen';
import Dashboard from './components/Dashboard';
import Game from './components/Game';

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
    <PaperProvider theme={selectedTheme}>
      <NavigationContainer theme={selectedTheme}>
          <Stack.Navigator initialRouteName="IntroScreen" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="IntroScreen" component={IntroScreen} />
            <Stack.Screen name="HomeScreen">
              {props => <HomeScreen {...props} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />}
            </Stack.Screen>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Game" component={Game} />
          </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default AppNavigator;
