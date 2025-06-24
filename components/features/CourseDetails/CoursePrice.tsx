import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

const CoursePrice = () => {
  return (
    <View style={styles.container}>
      {/* Price Section */}
      <View style={styles.priceBox}>
        <Text style={styles.discountedPrice}>$259</Text>
        <Text style={styles.discountText}>80% Disc.  <Text style={styles.originalPrice}>1020$</Text></Text>
      </View>

      {/* Button Section */}
      <TouchableOpacity style={styles.cartButton}>
        <Feather name="shopping-cart" size={16} color="#fff" style={{ marginRight: 6 }} />
        <Text style={styles.cartButtonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CoursePrice;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  priceBox: {
    flexDirection: "column",
  },
  discountedPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  discountText: {
    fontSize: 13,
    color: "#555",
    marginTop: 2,
  },
  originalPrice: {
    textDecorationLine: "line-through",
    color: "#888",
  },
  cartButton: {
    flexDirection: "row",
    backgroundColor: "#4a5262",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: "center",
  },
  cartButtonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "500",
  },
});
