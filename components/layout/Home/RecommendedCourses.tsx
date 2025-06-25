// components/layout/Home/RecommendedCourses.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Course {
  id: string;
  title: string;
  author: string;
  price: string;
  rating: number;
  reviews: number;
  lessons: number;
  badge?: string; // "Best-seller", "20% Off", etc.
}

const recommendedCourses: Course[] = [
  {
    id: '1',
    title: 'Website Design',
    author: 'Ramono Wultschner',
    price: '$59',
    rating: 4.5,
    reviews: 1233,
    lessons: 9,
    badge: 'Best-seller',
  },
  {
    id: '2',
    title: 'UX Research For...',
    author: 'Olivia Wang',
    price: '$29',
    rating: 4.5,
    reviews: 1782,
    lessons: 12,
    badge: '20% Off',
  },
  {
    id: '3',
    title: 'Advanced Figma',
    author: 'Lucas Brown',
    price: '$49',
    rating: 4.6,
    reviews: 980,
    lessons: 10,
    badge: 'Hot',
  },
  {
    id: '4',
    title: 'HTML & CSS Mastery',
    author: 'Nina Patel',
    price: '$39',
    rating: 4.4,
    reviews: 875,
    lessons: 15,
  },
  {
    id: '5',
    title: 'Mobile UI Design',
    author: 'Emilia Roberts',
    price: '$55',
    rating: 4.8,
    reviews: 1560,
    lessons: 18,
    badge: 'Top Rated',
  },
  {
    id: '6',
    title: 'Design Thinking Basics',
    author: 'Samir Khoury',
    price: '$34',
    rating: 4.3,
    reviews: 623,
    lessons: 8,
  },
  {
    id: '7',
    title: 'Creating Design Systems',
    author: 'Anna Lee',
    price: '$64',
    rating: 4.9,
    reviews: 990,
    lessons: 20,
    badge: 'New',
  },
];


const RecommendedCourses = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Recommended for you</Text>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={recommendedCourses}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            {item.badge && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.badge}</Text>
              </View>
            )}
            <View style={styles.imagePlaceholder} />
            <View style={styles.cardContent}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.author}>{item.author}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <View style={styles.ratingRow}>
                <Icon name="star" size={14} color="#000" />
                <Text style={styles.ratingText}>
                  {item.rating} ({item.reviews})
                </Text>
                <Text style={styles.lessonsText}> • {item.lessons} lessons</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookmarkIcon}>
              <Icon name="bookmark-o" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  header: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  viewMore: {
    fontSize: 14,
    color: '#0066cc',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    width: 200,
    marginRight: 12,
    elevation: 2,
    paddingBottom: 10,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 8,
    left: 8,
    backgroundColor: '#d1d1d1',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 1,
  },
  badgeText: {
    fontSize: 10,
    color: '#333',
  },
  imagePlaceholder: {
    height: 100,
    backgroundColor: '#eaeaea',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  cardContent: {
    paddingHorizontal: 10,
    paddingTop: 8,
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 4,
  },
  author: {
    fontSize: 12,
    color: '#555',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 6,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 4,
    color: '#000',
  },
  lessonsText: {
    fontSize: 12,
    color: '#777',
  },
  bookmarkIcon: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
});

export default RecommendedCourses;
