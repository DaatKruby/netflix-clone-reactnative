import * as React from "react";
import { StyleSheet, Image, FlatList } from "react-native";
import HomeCategory from "../../components/HomeCategory/HomeCategory.tsx";

import { Text, View } from "../../components/Themed";
import styles from "./styles";

import categories from "../../assets/data/categories.ts";


const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={categories.items}
        renderItem={({ item }) => <HomeCategory category={item} />}
      />
    </View>
  );
};

export default HomeScreen;
