import React from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  View,
  ListRenderItem,
} from "react-native";

import UserProfileCard from "@/components/layout/Profile/Header";
import SavedCourses from "@/components/layout/Profile/SavedCourses";

const components = [
  { key: "profileCard", element: <UserProfileCard /> },
  { key: "savedCourses", element: <SavedCourses /> },
];

export default function ProfileScreen() {
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
    backgroundColor: "#fff", // Change if using dark mode
  },
  contentContainer: {
    padding: 16,
  },
  itemContainer: {
    marginBottom: 16,
  },
});
