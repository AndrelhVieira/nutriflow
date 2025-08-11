import React from "react";
import { View, Text, ScrollView } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import recipesData from "../../storage/recipes.json";
import { RootStackParamList } from "../../navigation";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;

export default function RecipeDetails({ route }: Props) {
  const { id } = route.params;
  const recipe = recipesData.find((r) => r.id === id);

  if (!recipe)
    return (
      <View>
        <Text>Receita não encontrada</Text>
      </View>
    );

  return (
    <ScrollView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>{recipe.title}</Text>
      <Text style={{ marginVertical: 8 }}>
        {recipe.time} min • {recipe.diet}
      </Text>

      <Text style={{ fontWeight: "700", marginTop: 12 }}>Ingredientes</Text>
      {recipe.ingredients.map((ing, i) => (
        <Text key={i}>• {ing}</Text>
      ))}

      <Text style={{ fontWeight: "700", marginTop: 12 }}>Modo de preparo</Text>
      {recipe.steps.map((s, i) => (
        <Text key={i}>
          {i + 1}. {s}
        </Text>
      ))}
    </ScrollView>
  );
}
