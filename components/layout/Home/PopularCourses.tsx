// components/layout/Home/PopularCourses.tsx
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useRouter } from 'expo-router';

interface Course {
  id: string;
  title: string;
  author: string;
  price: string;
  rating: number;
  reviews: number;
  lessons: number;
  bestSeller?: boolean;
}

const courses: Course[] = [
  {
    id: '1',
    title: 'PHP in One Click',
    author: 'Ramono Wultschner',
    price: '$59',
    rating: 4.5,
    reviews: 1233,
    lessons: 18,
  },
  {
    id: '2',
    title: 'Python Introduction',
    author: 'Ramono Wultschner',
    price: '$39',
    rating: 4.5,
    reviews: 1267,
    lessons: 12,
    bestSeller: true,
  },
  {
    id: '3',
    title: 'Mastering JavaScript',
    author: 'Lena Christoph',
    price: '$49',
    rating: 4.7,
    reviews: 980,
    lessons: 20,
    bestSeller: true,
  },
  {
    id: '4',
    title: 'React Native Bootcamp',
    author: 'Carlos Gomez',
    price: '$45',
    rating: 4.6,
    reviews: 875,
    lessons: 22,
  },
  {
    id: '5',
    title: 'Intro to Machine Learning',
    author: 'Anita Rao',
    price: '$69',
    rating: 4.8,
    reviews: 1100,
    lessons: 24,
    bestSeller: true,
  },
  {
    id: '6',
    title: 'Web Development Basics',
    author: 'Tom Lee',
    price: '$35',
    rating: 4.3,
    reviews: 743,
    lessons: 14,
  },
];

export default function PopularCourses() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}> 
        <Text style={styles.header}>Popular Courses</Text>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={courses}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: '/course/[id]',
                params: {
                  id: item.id,
                  title: item.title,
                  author: item.author,
                  price: item.price,
                  rating: item.rating.toString(),
                  reviews: item.reviews.toString(),
                  lessons: item.lessons.toString(),
                  bestSeller: item.bestSeller ? 'true' : 'false',
                },
              })
            }
          >
            {item.bestSeller && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>Best-seller</Text>
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
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
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
    backgroundColor: '#ffb703',
    borderRadius: 6,
    paddingHorizontal: 6,
    paddingVertical: 2,
    zIndex: 1,
  },
  badgeText: {
    fontSize: 10,
    color: '#fff',
    fontWeight: 'bold',
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
  viewMore: {
    fontSize: 14,
    color: '#0066cc',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  }
});
