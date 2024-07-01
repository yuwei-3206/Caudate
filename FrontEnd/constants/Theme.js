import { DefaultTheme, configureFonts } from 'react-native-paper';

/*
const fontConfig = {
  default: {
    regular: {
      fontFamily: 'Nunito_400Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'Nunito_700Bold',
      fontWeight: 'normal',
    },
    black: {
      fontFamily: 'Nunito_900Black',
      fontWeight: 'normal',
    },
  },
};

fontConfig.ios = fontConfig.default;
fontConfig.android = fontConfig.default;
fontConfig.web = fontConfig.default;

const fonts = configureFonts({ config: fontConfig });
*/

const theme = {
  ...DefaultTheme,
};

const lightTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#72d0fc',
    accent: '#00B386',
    background: '#1cb0f6',
    text: '#FFFFFF',
    button: {
      text: '#000000',
      background: '#FFFFFF',
    },
  },
};

const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    primary: '#59838c',
    accent: '#00B386',
    background: '#134f5c',
    text: '#FFFFFF',
    button: {
      text: '#FFFFFF',
      background: '#59838c',
    },
  },
};

export { theme, lightTheme, darkTheme };
