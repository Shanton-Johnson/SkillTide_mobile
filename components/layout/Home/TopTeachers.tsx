import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

interface Teacher {
  name: string;
  university: string;
  rating: number;
  reviews: number;
}

const teachers: Teacher[] = [
  {
    name: 'Christian Hayes',
    university: 'University of London',
    rating: 4.5,
    reviews: 1233,
  },
  {
    name: 'Dennis Sweeney',
    university: 'University of Chicago',
    rating: 4.5,
    reviews: 1233,
  },
  {
    name: 'Lisa Johnson',
    university: 'University of Cape Town',
    rating: 4.5,
    reviews: 1233,
  },
];

const TopTeachers = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top teachers</Text>
        <Text style={styles.viewMore}>View more</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {teachers.map((teacher, index) => (
          <View style={styles.card} key={index}>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imageIcon}>🖼️</Text>
            </View>
            <Text style={styles.name}>{teacher.name}</Text>
            <Text style={styles.university}>{teacher.university}</Text>
            <Text style={styles.rating}>
              ⭐ {teacher.rating} ({teacher.reviews})
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TopTeachers;

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewMore: {
    fontSize: 14,
    color: '#888',
  },
  card: {
    width: 160,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  imagePlaceholder: {
    backgroundColor: '#eee',
    height: 80,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  imageIcon: {
    fontSize: 24,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 2,
  },
  university: {
    fontSize: 12,
    color: '#444',
    marginBottom: 6,
  },
  rating: {
    fontSize: 12,
    color: '#444',
  },
});
