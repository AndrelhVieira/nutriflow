import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    AsyncStorage.getItem("@favorites").then((v) => {
      if (v) setFavorites(JSON.parse(v));
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("@favorites", JSON.stringify(favorites));
  }, [favorites]);

  function toggle(id: string) {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  return { favorites, toggle };
}
