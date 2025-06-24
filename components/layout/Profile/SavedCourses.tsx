import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

type Course = {
  id: string;
  title: string;
  author: string;
  price: string;
  rating: number;
  reviews: number;
  lessons: number;
};

const courses: Course[] = [
  {
    id: '1',
    title: 'Product Design',
    author: 'Dennis Sweeney',
    price: '$190',
    rating: 4.5,
    reviews: 1233,
    lessons: 12,
  },
  {
    id: '2',
    title: 'Website Design',
    author: 'Ramono Wultschner',
    price: '$59',
    rating: 4.5,
    reviews: 1233,
    lessons: 12,
  },
  {
    id: '3',
    title: 'Mobile UI Design',
    author: 'Ramono Wultschner',
    price: '$320',
    rating: 4.5,
    reviews: 1233,
    lessons: 12,
  },
  {
    id: '4',
    title: 'Digital Portrait',
    author: 'Ramono Wultschner',
    price: '$67',
    rating: 4.5,
    reviews: 1233,
    lessons: 12,
  },
];

const SavedCourses = () => {
  const renderItem = ({ item }: { item: Course }) => (
    <View style={styles.card}>
      <Image
        source={require('@/assets/images/icon.png')} // Replace with your placeholder image path
        style={styles.thumbnail}
      />
      <View style={styles.details}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
        <Text style={styles.price}>{item.price}</Text>
        <View style={styles.meta}>
          <MaterialIcons name="star" size={16} color="black" />
          <Text style={styles.metaText}>{item.rating} ({item.reviews})</Text>
          <Text style={styles.metaText}>• {item.lessons} lessons</Text>
        </View>
      </View>
      <TouchableOpacity>
        <MaterialIcons name="bookmark-border" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Saved courses</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: '#222',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    backgroundColor: '#f9f9f9',
    padding: 12,
    borderRadius: 8,
  },
  thumbnail: {
    width: 60,
    height: 60,
    borderRadius: 6,
    marginRight: 12,
    backgroundColor: '#ddd',
  },
  details: {
    flex: 1,
  },
  title: {
    fontWeight: '700',
    fontSize: 15,
    marginBottom: 2,
  },
  author: {
    color: '#555',
    marginBottom: 2,
  },
  price: {
    fontWeight: '700',
    marginBottom: 4,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  metaText: {
    fontSize: 12,
    color: '#444',
    marginLeft: 4,
    marginRight: 8,
  },
  separator: {
    height: 12,
  },
});

export default SavedCourses;
