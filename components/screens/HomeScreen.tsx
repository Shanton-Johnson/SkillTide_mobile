import React from "react";
import { FlatList } from "react-native";
import Header from "../layout/Home/Header";
import CategoriesGrid from "../layout/Home/CategoriesGrid";
import PopularCourses from "../layout/Home/PopularCourses";
import RecommendedCourses from "../layout/Home/RecommendedCourses";
import InspiringCourses from "../layout/Home/InspiringCourses";
import TopTeachers from "../layout/Home/TopTeachers";

export default function HomeScreen() {
  // Define sections as data items for FlatList
  const sections = [
    { key: "header", render: () => <Header /> },
    { key: "categories", render: () => <CategoriesGrid /> },
    { key: "popular", render: () => <PopularCourses /> },
    { key: "recommended", render: () => <RecommendedCourses /> },
    { key: "inspiring", render: () => <InspiringCourses /> },
    { key: "teachers", render: () => <TopTeachers /> },
  ];

  return (
    <FlatList
      data={sections}
      keyExtractor={(item) => item.key}
      renderItem={({ item }) => item.render()}
      contentContainerStyle={{ paddingBottom: 16 }}
      showsVerticalScrollIndicator={false}
    />
  );
}
