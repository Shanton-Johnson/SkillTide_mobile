import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const courses = [
  {
    id: '1',
    title: 'UX Foundation',
    category: 'UI/UX Design',
    price: '$51',
    rating: 4.5,
    reviews: 1233,
    lessons: 12,
  },
  {
    id: '2',
    title: 'Mobile App Design',
    category: 'UI/UX Design',
    price: '$59',
    rating: 4.5,
    reviews: 1233,
    lessons: 12,
  },
  {
    id: '3',
    title: 'Digital Poster',
    category: 'Graphic Design',
    price: '$59',
    rating: 4.5,
    reviews: 1233,
    lessons: 12,
  },
  {
    id: '4',
    title: 'Patterns Design',
    category: 'Graphic Design',
    price: '$59',
    rating: 4.5,
    reviews: 1233,
    lessons: 12,
  },
];

const TeacherProfile = () => {
  const groupedCourses = {
    'UI/UX Design': courses.filter(course => course.category === 'UI/UX Design'),
    'Graphic Design': courses.filter(course => course.category === 'Graphic Design'),
  };

  const renderCourseCard = (item: typeof courses[0]) => (
    <View style={styles.courseCard}>
      <View style={styles.imagePlaceholder} />
      <Text style={styles.courseTitle}>{item.title}</Text>
      <Text style={styles.courseAuthor}>Sara Weise</Text>
      <Text style={styles.coursePrice}>{item.price}</Text>
      <View style={styles.courseInfo}>
        <Text style={styles.courseRating}>
          ⭐ {item.rating} ({item.reviews})
        </Text>
        <Text style={styles.courseLessons}>{item.lessons} lessons</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Teacher's profile</Text>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profileImagePlaceholder} />
        <Text style={styles.teacherName}>Sara Weise</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Teacher</Text>
        </View>
        <Text style={styles.profession}>UI/UX Designer</Text>
        <Text style={styles.location}>📍 New York - 09:30 AM</Text>
      </View>

      <View style={styles.tabSection}>
        <Text style={styles.tab}>OVERVIEW</Text>
        <Text style={[styles.tab, styles.activeTab]}>COURSES</Text>
        <Text style={styles.tab}>REVIEW</Text>
      </View>

      {Object.entries(groupedCourses).map(([category, list], idx) => (
        <View key={idx}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>{category}</Text>
            <Text style={styles.viewAll}>View all</Text>
          </View>
          <FlatList
            horizontal
            data={list}
            renderItem={({ item }) => renderCourseCard(item)}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingTop: 20,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 10,
  },
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#ddd',
    marginBottom: 10,
  },
  teacherName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  tag: {
    backgroundColor: '#3b3f4e',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginVertical: 4,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
  },
  profession: {
    fontSize: 14,
    color: '#444',
  },
  location: {
    fontSize: 12,
    color: '#777',
  },
  tabSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    marginBottom: 10,
    paddingVertical: 10,
  },
  tab: {
    fontSize: 14,
    color: '#888',
  },
  activeTab: {
    color: '#000',
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderColor: '#000',
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  viewAll: {
    color: '#888',
    fontSize: 12,
  },
  courseCard: {
    width: 160,
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 8,
  },
  imagePlaceholder: {
    height: 90,
    backgroundColor: '#ccc',
    borderRadius: 8,
    marginBottom: 10,
  },
  courseTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  courseAuthor: {
    fontSize: 12,
    color: '#555',
  },
  coursePrice: {
    fontWeight: 'bold',
    marginTop: 4,
  },
  courseInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  courseRating: {
    fontSize: 12,
    color: '#666',
  },
  courseLessons: {
    fontSize: 12,
    color: '#666',
  },
});

export default TeacherProfile;
