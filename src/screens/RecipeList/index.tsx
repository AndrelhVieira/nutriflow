import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import recipesData from "../../storage/recipes.json";
import { RootStackParamList } from "../../navigation";

import { Container, Title } from "./ReceiptList.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function RecipeList({ navigation }: Props) {
  const [recipes, setRecipes] = useState(recipesData);

  return (
    <Container>
      <Title>Receitas</Title>
      <FlatList
        data={recipes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Details", { id: item.id })}
            style={{ padding: 12, borderBottomWidth: 1 }}
          >
            <Text style={{ fontSize: 16 }}>{item.title}</Text>
            <Text style={{ color: "#666" }}>
              {item.time} min • {item.diet}
            </Text>
          </TouchableOpacity>
        )}
      />
    </Container>
  );
}
