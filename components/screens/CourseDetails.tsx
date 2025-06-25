// components/layout/screens/CourseDetails.tsx
import React from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  ListRenderItem,
} from "react-native";

import CourseDetailsHeader from "../features/CourseDetails/CourseDetailsHeader";
import CourseHero from "../features/CourseDetails/CourseHero";
import CourseLessons from "../features/CourseDetails/CourseLessons";
import CoursePrice from "../features/CourseDetails/CoursePrice";

const components = [
  { key: "header", element: <CourseDetailsHeader /> },
  { key: "hero", element: <CourseHero /> },
  { key: "lessons", element: <CourseLessons /> },
  { key: "price", element: <CoursePrice /> },
];

export default function CourseDetails() {
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
    backgroundColor: "#fff", // change for dark mode, if needed
  },
  contentContainer: {
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
});
