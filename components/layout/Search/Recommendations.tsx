// components/layout/Search/Recommendations.tsx
import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

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
    title: 'Website Design',
    author: 'Ramono Wultschner',
    price: '$590',
    rating: '4.5',
    reviews: '1233',
    lessons: '9 lessons',
    tag: 'Best-seller',
  },
  {
    id: '2',
    title: 'UX Research For...',
    author: 'Olivia Wang',
    price: '$290',
    rating: '4.5',
    reviews: '1782',
    lessons: '12 lessons',
    tag: '20% Off',
  },
  {
    id: '3',
    title: 'Mobile App Design',
    author: 'James Lee',
    price: '$430',
    rating: '4.7',
    reviews: '980',
    lessons: '10 lessons',
  },
  {
    id: '4',
    title: 'Front-End Mastery',
    author: 'Ayesha Patel',
    price: '$510',
    rating: '4.6',
    reviews: '1105',
    lessons: '11 lessons',
  },
  {
    id: '5',
    title: 'Design Systems 101',
    author: 'Carlos Mendes',
    price: '$350',
    rating: '4.4',
    reviews: '870',
    lessons: '8 lessons',
    tag: 'Top Rated',
  },
  {
    id: '6',
    title: 'Figma for Teams',
    author: 'Leila Kwan',
    price: '$270',
    rating: '4.3',
    reviews: '760',
    lessons: '7 lessons',
  },
];


const CourseCard = ({ course }: { course: Course }) => (
  <View style={styles.card}>
    <View style={styles.imagePlaceholder}>
      {course.tag && <Text style={styles.tag}>{course.tag}</Text>}
    </View>
    <Text style={styles.title}>{course.title}</Text>
    <Text style={styles.author}>{course.author}</Text>
    <Text style={styles.price}>{course.price}</Text>
    <Text style={styles.rating}>
      ⭐ {course.rating} ({course.reviews}) · {course.lessons}
    </Text>
  </View>
);

const Recommendations = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Recommended for you</Text>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        horizontal
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CourseCard course={item} />}
        contentContainerStyle={{ gap: 12 }}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  viewMore: {
    fontSize: 14,
    color: '#888',
  },
  card: {
    width: 180,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  imagePlaceholder: {
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 8,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 6,
  },
  tag: {
    backgroundColor: '#ddd',
    color: '#333',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    fontSize: 10,
    fontWeight: '600',
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 2,
  },
  author: {
    fontSize: 12,
    color: '#555',
    marginBottom: 4,
  },
  price: {
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
  },
  rating: {
    fontSize: 12,
    color: '#666',
  },
});

export default Recommendations;
