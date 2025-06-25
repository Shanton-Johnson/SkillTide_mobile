import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import { useRouter } from 'expo-router';

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
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Top teachers</Text>
        <Text style={styles.viewMore}>View more</Text>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingRight: 16 }}
      >
        {teachers.map((teacher, index) => (
          <Pressable
            key={index}
            onPress={() =>
              router.push({
                pathname: "/teacher/[name]",
                params: { name: teacher.name },
              })
            }
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
          >
            <View style={styles.imagePlaceholder}>
              <Text style={styles.imageIcon}>🖼️</Text>
            </View>
            <Text style={styles.name}>{teacher.name}</Text>
            <Text style={styles.university}>{teacher.university}</Text>
            <Text style={styles.rating}>
              ⭐ {teacher.rating} ({teacher.reviews})
            </Text>
          </Pressable>
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
    marginBottom: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
  },
  viewMore: {
    fontSize: 14,
    color: '#888',
  },
  card: {
    width: 180,
    marginRight: 16,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  cardPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
    shadowOpacity: 0.15,
  },
  imagePlaceholder: {
    backgroundColor: '#f0f0f0',
    height: 100,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  imageIcon: {
    fontSize: 28,
  },
  name: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 4,
    color: '#222',
  },
  university: {
    fontSize: 13,
    color: '#666',
    marginBottom: 8,
  },
  rating: {
    fontSize: 13,
    color: '#333',
  },
});
