// components/features/CourseList.tsx
import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // For search and bookmark icons

type Course = {
  id: string;
  title: string;
  author: string;
  price: string;
  rating: string;
  reviews: string;
  lessons: string;
  tag?: string;
};

const courses: Course[] = [
  {
    id: '1',
    title: 'UX Foundation',
    author: 'Sara Weise',
    price: '$51',
    rating: '4.5',
    reviews: '1233',
    lessons: '13 lessons',
    tag: 'Best-seller',
  },
  {
    id: '2',
    title: 'Design Basics',
    author: 'Kelly Hamilton',
    price: '$89',
    rating: '4.5',
    reviews: '1233',
    lessons: '12 lessons',
  },
  {
    id: '3',
    title: 'Digital Sketching',
    author: 'Ramono Wultschner',
    price: '$49',
    rating: '4.5',
    reviews: '1233',
    lessons: '8 lessons',
  },
  {
    id: '4',
    title: 'Digital Portrait',
    author: 'Ramono Wultschner',
    price: '$67',
    rating: '4.5',
    reviews: '1233',
    lessons: '11 lessons',
  },
  {
    id: '5',
    title: 'Web Design',
    author: 'Ryan Meyers',
    price: '$29',
    rating: '4.5',
    reviews: '1233',
    lessons: '8 lessons',
  },
];

const CourseItem = ({ course }: { course: Course }) => (
  <View style={styles.courseCard}>
    <View style={styles.imageBox}>
      {course.tag && <Text style={styles.tag}>{course.tag}</Text>}
    </View>
    <View style={styles.courseInfo}>
      <View style={styles.courseHeader}>
        <Text style={styles.title}>{course.title}</Text>
        <Ionicons name="bookmark-outline" size={20} color="#333" />
      </View>
      <Text style={styles.author}>{course.author}</Text>
      <Text style={styles.price}>{course.price}</Text>
      <Text style={styles.meta}>
        ⭐ {course.rating} ({course.reviews}) · {course.lessons}
      </Text>
    </View>
  </View>
);

const CourseListScreen = () => {
  return (
    <View style={styles.container}>
      {/* Search and Filter */}
      <View style={styles.searchFilterRow}>
        <View style={styles.searchBox}>
          <Ionicons name="search-outline" size={18} color="#888" />
          <TextInput
            style={styles.input}
            placeholder="Design"
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Results count */}
      <Text style={styles.resultsText}>120 Results</Text>

      {/* List */}
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseItem course={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  searchFilterRow: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  searchBox: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  input: {
    marginLeft: 8,
    fontSize: 14,
    flex: 1,
  },
  filterButton: {
    backgroundColor: '#2D3142',
    paddingHorizontal: 16,
    marginLeft: 12,
    borderRadius: 8,
    justifyContent: 'center',
  },
  filterText: {
    color: '#fff',
    fontWeight: '600',
  },
  resultsText: {
    fontWeight: '600',
    marginBottom: 12,
    color: '#222',
  },
  courseCard: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 2,
    padding: 12,
  },
  imageBox: {
    width: 70,
    height: 70,
    backgroundColor: '#eee',
    borderRadius: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 4,
    marginRight: 12,
  },
  tag: {
    fontSize: 10,
    backgroundColor: '#ccc',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    fontWeight: '600',
    color: '#333',
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  courseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    flexShrink: 1,
  },
  author: {
    fontSize: 12,
    color: '#555',
    marginBottom: 2,
  },
  price: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 2,
  },
  meta: {
    fontSize: 12,
    color: '#666',
  },
});

export default CourseListScreen;
