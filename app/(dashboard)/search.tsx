// app/(dashboard)/search.tsx
import React from "react";
import { FlatList, SafeAreaView, View, StyleSheet } from "react-native";
import SearchBarWithFilter from "@/components/layout/Search/SearchBar";
import HotTopics from "@/components/layout/Search/HotTopics";
import CategoriesList from "@/components/layout/Search/Categories";
import Recommendations from "@/components/layout/Search/Recommendations";

const COMPONENTS = [
  { key: "hotTopics", render: () => <HotTopics /> },
  { key: "categoriesList", render: () => <CategoriesList /> },
  { key: "recommendations", render: () => <Recommendations /> },
];

export default function SearchScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={COMPONENTS}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <View style={styles.sectionContainer}>{item.render()}</View>
        )}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<SearchBarWithFilter />}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingBottom: 30,
    paddingHorizontal: 16,
    marginTop: 50,

  },
  sectionContainer: {
    marginBottom: 16,
  },
});
