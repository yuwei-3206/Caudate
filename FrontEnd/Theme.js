import { DefaultTheme } from 'react-native-paper';
import { useFonts } from 'expo-font';
import { Nunito_400Regular, Nunito_700Bold, Nunito_900Black } from '@expo-google-fonts/nunito';

// Load the fonts
/*useFonts({
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_900Black
});*/

// Define the theme with the loaded fonts
const theme = {
  ...DefaultTheme,
  /*fonts: {
    regular: {
      fontFamily: 'Nunito_400Regular',
    },
    bold: {
      fontFamily: 'Nunito_700Bold',
    },
    black: {
      fontFamily: 'Nunito_900Black',
    },
  },*/
};

const lightTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#ffffff',
    accent: '#00B386',
    background: '#6bdfff',
    text: '#000000',
    button: {
      text: '#FFFFFF',
      background: '#FF5733',
    },
  },
};

const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#FF5733',
    accent: '#00B386',
    background: '#134f5c',
    text: '#FFFFFF',
    button: {
      text: '#000000',
      background: '#FF5733',
    },
  },
};

export { theme, lightTheme, darkTheme };
