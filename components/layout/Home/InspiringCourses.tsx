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
}

const inspiringCourses: Course[] = [
  {
    id: '1',
    title: 'Digital Portrait',
    author: 'Ramono Wultschner',
    price: '$67',
    rating: 4.5,
    reviews: 657,
    lessons: 12,
  },
  {
    id: '2',
    title: 'Workspace Decor',
    author: 'Ruth Dominguez',
    price: '$19',
    rating: 4.5,
    reviews: 33,
    lessons: 17,
  },
  {
    id: '3',
    title: 'Packaging Design',
    author: 'Hui Anderson',
    price: '$89',
    rating: 4.5,
    reviews: 1233,
    lessons: 14,
  },
];

const InspiringCourses = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.header}>Course that inspires</Text>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={inspiringCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.imagePlaceholder} />
            <View style={styles.infoContainer}>
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
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
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
    flexDirection: 'row',
    padding: 10,
    position: 'relative',
    elevation: 2,
  },
  imagePlaceholder: {
    width: 70,
    height: 70,
    backgroundColor: '#eaeaea',
    borderRadius: 8,
    marginRight: 12,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 2,
  },
  author: {
    fontSize: 12,
    color: '#555',
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 4,
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
    top: 10,
    right: 10,
  },
});

export default InspiringCourses;
