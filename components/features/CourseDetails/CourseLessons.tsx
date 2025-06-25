// components/features/CourseDetails/CourseLessons.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

type Lesson = {
  id: string;
  title: string;
  duration: string;
  status: "completed" | "unlocked" | "locked";
};

type Section = {
  id: string;
  title: string;
  lessons: Lesson[];
};

const courseSections: Section[] = [
  {
    id: "1",
    title: "I - Introduction",
    lessons: [
      {
        id: "1",
        title: "Amet adipisicing consectetur",
        duration: "01:23 mins",
        status: "completed",
      },
      {
        id: "2",
        title: "Adipisicing dolor amet occaeca",
        duration: "01:23 mins",
        status: "unlocked",
      },
    ],
  },
  {
    id: "2",
    title: "III - Plan for your UX Research",
    lessons: [
      {
        id: "3",
        title: "Exercitation elit incididunt esse",
        duration: "01:23 mins",
        status: "locked",
      },
      {
        id: "4",
        title: "Duis esse ipsum laboru",
        duration: "01:23 mins",
        status: "locked",
      },
      {
        id: "5",
        title: "Labore minim reprehenderit pariatur ea deserunt",
        duration: "01:23 mins",
        status: "locked",
      },
    ],
  },
  {
    id: "3",
    title: "III - Conduct UX research",
    lessons: [],
  },
  {
    id: "4",
    title: "IV - Articulate findings",
    lessons: [],
  },
];

const CourseLessons = () => {
  const [openSections, setOpenSections] = useState<string[]>(["1"]);

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((sec) => sec !== id) : [...prev, id]
    );
  };

  const renderLessonIcon = (status: Lesson["status"]) => {
    switch (status) {
      case "completed":
        return <Ionicons name="checkmark" size={20} color="#000" />;
      case "unlocked":
        return <Feather name="play" size={20} color="#000" />;
      case "locked":
        return <Feather name="lock" size={20} color="#888" />;
    }
  };

  return (
    <View style={styles.container}>
      {courseSections.map((section) => (
        <View key={section.id} style={styles.section}>
          {/* Section Header */}
          <TouchableOpacity
            onPress={() => toggleSection(section.id)}
            style={styles.sectionHeader}
          >
            <Text style={styles.sectionTitle}>{section.title}</Text>
            <Ionicons
              name={
                openSections.includes(section.id)
                  ? "chevron-up"
                  : "chevron-down"
              }
              size={20}
              color="#000"
            />
          </TouchableOpacity>

          {/* Lessons */}
          {openSections.includes(section.id) &&
            section.lessons.map((lesson) => (
              <View key={lesson.id} style={styles.lessonRow}>
                <View>
                  <Text style={styles.lessonTitle}>
                    {lesson.id.padStart(2, "0")} {lesson.title}
                  </Text>
                  <Text style={styles.lessonDuration}>{lesson.duration}</Text>
                </View>
                {renderLessonIcon(lesson.status)}
              </View>
            ))}
        </View>
      ))}
    </View>
  );
};

export default CourseLessons;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#000",
    paddingBottom: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
  },
  sectionTitle: {
    fontWeight: "700",
    fontSize: 16,
    color: "#000",
  },
  lessonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 8,
    paddingLeft: 10,
  },
  lessonTitle: {
    fontSize: 14,
    color: "#000",
  },
  lessonDuration: {
    fontSize: 12,
    color: "#555",
  },
});
