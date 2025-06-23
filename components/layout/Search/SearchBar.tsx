import React from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // or use any icon library you prefer

const SearchBarWithFilter: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={16} color="#A0A4AB" style={styles.searchIcon} />
        <TextInput
          placeholder="Search course"
          placeholderTextColor="#A0A4AB"
          style={styles.input}
        />
      </View>
      <TouchableOpacity style={styles.filterButton}>
        <Ionicons name="filter" size={16} color="#fff" style={styles.filterIcon} />
        <Text style={styles.filterText}>Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    backgroundColor: "#fff",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f1f2f3",
    borderRadius: 8,
    flex: 1,
    paddingHorizontal: 8,
    height: 36,
  },
  searchIcon: {
    marginRight: 4,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "#333",
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#555B6E", // the dark gray background from your image
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    marginLeft: 8,
    height: 36,
  },
  filterIcon: {
    marginRight: 4,
  },
  filterText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default SearchBarWithFilter;
