import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome5, Entypo } from "@expo/vector-icons"; // You can adjust icon libraries as needed

const categories = [
  { id: "1", name: "Business", icon: <Ionicons name="stats-chart" size={20} color="#000" /> },
  { id: "2", name: "Design", icon: <Ionicons name="color-palette" size={20} color="#000" /> },
  { id: "3", name: "Code", icon: <Ionicons name="code-slash" size={20} color="#000" /> },
  { id: "4", name: "Movie", icon: <Ionicons name="videocam" size={20} color="#000" /> },
  { id: "5", name: "Language", icon: <Ionicons name="language" size={20} color="#000" /> },
];

const CategoriesList: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>

      {categories.map((cat) => (
        <TouchableOpacity key={cat.id} style={styles.categoryItem}>
          <View style={styles.iconLabel}>
            {cat.icon}
            <Text style={styles.categoryText}>{cat.name}</Text>
          </View>
          <Ionicons name="chevron-forward" size={20} color="#000" />
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  viewMore: {
    fontSize: 14,
    color: "#007bff",
  },
  categoryItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#eee",
  },
  iconLabel: {
    flexDirection: "row",
    alignItems: "center",
  },
  categoryText: {
    marginLeft: 8,
    fontSize: 14,
    color: "#333",
  },
});

export default CategoriesList;
