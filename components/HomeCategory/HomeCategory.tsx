import * as React from "react";
import { StyleSheet, Image, FlatList } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import styles from "./styles";

import categories from "../../assets/data/categories.ts";

const firstCategories = categories.items[0];

interface HomeCategoryProps {
  category: {
    id: string;
    title: string;
    movies: [id: string, poster: string];
  };
}

const HomeCategory = (props: HomeCategoryProps) => {
  const { category } = props;
  return (
    <>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        data={category.movies}
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{
              uri: item.poster,
            }}
          />
        )}
        horizontal
      />
    </>
  );
};

export default HomeCategory;
