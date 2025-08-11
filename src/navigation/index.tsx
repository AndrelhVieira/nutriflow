import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RecipeList from "../screens/RecipeList";
import RecipeDetails from "../screens/RecipeDetails";

export type RootStackParamList = {
  Home: undefined;
  Details: { id: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={RecipeList}
        options={{ title: "Receitas" }}
      />
      <Stack.Screen
        name="Details"
        component={RecipeDetails}
        options={{ title: "Detalhes" }}
      />
    </Stack.Navigator>
  );
}
