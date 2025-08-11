import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import AppNavigator from "./navigation";
import { lightTheme } from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
