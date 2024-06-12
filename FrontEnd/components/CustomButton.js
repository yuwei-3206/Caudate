import React from "react";
import { Button, useTheme } from 'react-native-paper';

const CustomButton = ({ children, onPress }) => {
  const theme = useTheme();

  return (
    <Button
      mode="contained"
      onPress={onPress}
      color={theme.colors.button.text}
      style={{ backgroundColor: theme.colors.button.background }}
      contentStyle={{ paddingVertical: 8 }}
      labelStyle={{ fontFamily: 'Nunito_900Black', color: theme.colors.button.text, fontSize: 16}}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
