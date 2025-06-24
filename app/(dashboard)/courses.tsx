import React from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  ListRenderItem,
} from "react-native";

import HeroSection from "@/components/layout/MyCourses/Hero";
import CourseList from "@/components/layout/MyCourses/CourseList";

const components = [
  { key: "hero", element: <HeroSection /> },
  { key: "courses", element: <CourseList /> },
];

export default function MyCourses() {
  const renderItem: ListRenderItem<typeof components[0]> = ({ item }) => (
    <View style={styles.itemContainer}>{item.element}</View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={components}
        renderItem={renderItem}
        keyExtractor={(item) => item.key}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
});
