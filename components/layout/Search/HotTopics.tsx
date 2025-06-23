import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const topics = [
  "Java",
  "SQL",
  "Javascript",
  "Python",
  "Digital marketing",
  "Photoshop",
  "Watercolor",
];

const HotTopics: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hot topics</Text>
      <View style={styles.tagsContainer}>
        {topics.map((topic, index) => (
          <TouchableOpacity key={index} style={styles.tag}>
            <Text style={styles.tagText}>{topic}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8, // only works on RN 0.71+; otherwise use margin
  },
  tag: {
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  tagText: {
    fontSize: 14,
    color: "#333",
  },
});

export default HotTopics;
