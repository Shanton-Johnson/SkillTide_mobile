// components/layout/MyCourses/CourseList.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';

type Course = {
  id: string;
  title: string;
  duration: string;
  progress: number;
};

const courses: Course[] = [
  {
    id: '1',
    title: 'UX Foundation',
    duration: '2 hrs 25 mins',
    progress: 30,
  },
  {
    id: '2',
    title: 'Creative Art Design',
    duration: '3 hrs 25 mins',
    progress: 70,
  },
  {
    id: '3',
    title: 'Palettes for Your App',
    duration: '4 hrs 50 mins',
    progress: 100,
  },
  {
    id: '4',
    title: 'Typography in UI Design',
    duration: '4 hrs 50 mins',
    progress: 50,
  },
];

const TABS = ['ALL', 'ON GOING', 'COMPLETED'];

const CourseList = () => {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredCourses = courses.filter((course) => {
    if (activeTab === 'ALL') return true;
    if (activeTab === 'ON GOING') return course.progress < 100;
    if (activeTab === 'COMPLETED') return course.progress === 100;
    return true;
  });

  const renderCourse = ({ item }: { item: Course }) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.imagePlaceholder} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.duration}>{item.duration}</Text>
          <Text style={styles.progressText}>{item.progress}% Complete</Text>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBar,
                { width: `${item.progress}%` },
              ]}
            />
          </View>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Tabs */}
      <View style={styles.tabs}>
        {TABS.map((tab) => (
          <TouchableOpacity key={tab} onPress={() => setActiveTab(tab)}>
            <Text
              style={[
                styles.tabText,
                activeTab === tab && styles.activeTab,
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* List */}
      <FlatList
        data={filteredCourses}
        keyExtractor={(item) => item.id}
        renderItem={renderCourse}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
    paddingHorizontal: 16,
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 8,
  },
  tabText: {
    fontSize: 14,
    color: '#777',
  },
  activeTab: {
    color: '#000',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 12,
    padding: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 3,
    shadowOffset: { width: 0, height: 1 },
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imagePlaceholder: {
    width: 60,
    height: 60,
    backgroundColor: '#eee',
    borderRadius: 4,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 2,
  },
  duration: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  progressText: {
    fontSize: 12,
    marginBottom: 4,
    color: '#333',
  },
  progressBarBackground: {
    height: 5,
    backgroundColor: '#ccc',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: 5,
    backgroundColor: '#000',
  },
});


export default CourseList;
