import React, { Children } from "react";
import { TouchableOpacity, View, Text } from "react-native-gesture-handler";
import { Button, useTheme } from 'react-native-paper';

const CustomButton = ({ children, onPress }) => {
  const theme = useTheme();

  return (


    <Button
      mode="contained"
      onPress={onPress}
      color={theme.colors.button.text}
      style={{ backgroundColor: theme.colors.button.background }}
      labelStyle={{ fontFamily: 'Nunito_900Black' }}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
