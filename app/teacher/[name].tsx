import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';

const mockCourses = [
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

const groupedCourses = {
  'UI/UX Design': mockCourses.filter(c => c.category === 'UI/UX Design'),
  'Graphic Design': mockCourses.filter(c => c.category === 'Graphic Design'),
};

const mockReviews = [
  {
    id: 'r1',
    user: 'Alice',
    rating: 5,
    comment: 'Excellent teacher, very clear explanations!',
  },
  {
    id: 'r2',
    user: 'Bob',
    rating: 4,
    comment: 'Learned a lot from the courses.',
  },
  {
    id: 'r3',
    user: 'Charlie',
    rating: 4.5,
    comment: 'Great teaching style and practical examples.',
  },
];

export default function TeacherProfile() {
  const { name } = useLocalSearchParams<{ name: string }>();
  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'review'>('courses');

  const renderCourseCard = (item: typeof mockCourses[0]) => (
    <View style={styles.courseCard}>
      <View style={styles.courseImage} />
      <Text style={styles.courseTitle} numberOfLines={1}>{item.title}</Text>
      <Text style={styles.courseAuthor}>{name}</Text>
      <Text style={styles.coursePrice}>{item.price}</Text>
      <View style={styles.courseInfo}>
        <Text style={styles.courseRating}>⭐ {item.rating} ({item.reviews})</Text>
        <Text style={styles.courseLessons}>{item.lessons} lessons</Text>
      </View>
    </View>
  );

  const renderOverview = () => (
    <View style={styles.overviewContainer}>
      <Text style={styles.overviewTitle}>About {name}</Text>
      <Text style={styles.overviewText}>
        {name} is a passionate UI/UX Designer with over 5 years of experience creating intuitive and engaging digital experiences. Dedicated to helping students learn design fundamentals and build practical skills.
      </Text>
      <View style={styles.overviewStats}>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>20+</Text>
          <Text style={styles.statLabel}>Courses</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>1500+</Text>
          <Text style={styles.statLabel}>Students</Text>
        </View>
        <View style={styles.stat}>
          <Text style={styles.statNumber}>4.7</Text>
          <Text style={styles.statLabel}>Average Rating</Text>
        </View>
      </View>
    </View>
  );

  const renderReview = () => (
    <View style={styles.reviewContainer}>
      {mockReviews.map(review => (
        <View key={review.id} style={styles.reviewCard}>
          <View style={styles.reviewHeader}>
            <Text style={styles.reviewUser}>{review.user}</Text>
            <Text style={styles.reviewRating}>⭐ {review.rating}</Text>
          </View>
          <Text style={styles.reviewComment}>{review.comment}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Teacher's profile</Text>
      </View>

      <View style={styles.banner} />
      <View style={styles.avatar} />

      <View style={styles.profileSection}>
        <Text style={styles.name}>{name}</Text>
        <View style={styles.tag}>
          <Text style={styles.tagText}>Teacher</Text>
        </View>
        <Text style={styles.profession}>UI/UX Designer</Text>
        <View style={styles.locationRow}>
          <Icon name="map-marker" size={12} color="#777" />
          <Text style={styles.location}> New York - 09:30 AM</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabSection}>
        {['overview', 'courses', 'review'].map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab as typeof activeTab)}
            style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
            activeOpacity={0.7}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab.toUpperCase()}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Content based on active tab */}
      <View>
        {activeTab === 'overview' && renderOverview()}
        {activeTab === 'courses' && (
          <>
            {Object.entries(groupedCourses).map(([category, list], idx) => (
              <View key={idx}>
                <View style={styles.courseSectionHeader}>
                  <Text style={styles.sectionTitle}>{category}</Text>
                  {category === 'UI/UX Design' && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>Top-rated</Text>
                    </View>
                  )}
                  <Text style={styles.viewAll}>View all</Text>
                </View>
                <FlatList
                  data={list}
                  horizontal
                  keyExtractor={item => item.id}
                  renderItem={({ item }) => renderCourseCard(item)}
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={{ paddingLeft: 16, paddingBottom: 12 }}
                />
              </View>
            ))}
          </>
        )}
        {activeTab === 'review' && renderReview()}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  banner: {
    height: 120,
    backgroundColor: '#ddd',
    marginTop: 12,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#aaa',
    position: 'absolute',
    top: 140,
    left: '50%',
    transform: [{ translateX: -40 }],
    borderWidth: 2,
    borderColor: '#fff',
  },
  profileSection: {
    alignItems: 'center',
    marginTop: 50,
    paddingHorizontal: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  tag: {
    backgroundColor: '#3b3f4e',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginTop: 4,
    marginBottom: 4,
  },
  tagText: {
    color: '#fff',
    fontSize: 12,
  },
  profession: {
    color: '#444',
    fontSize: 14,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  location: {
    fontSize: 12,
    color: '#777',
  },
  tabSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderBottomWidth: 1,
    borderColor: '#eee',
    paddingBottom: 8,
    marginHorizontal: 16,
  },
  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  activeTabButton: {
    borderBottomWidth: 2,
    borderColor: '#000',
  },
  tabText: {
    fontSize: 14,
    color: '#888',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  courseSectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 20,
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginRight: 8,
  },
  badge: {
    backgroundColor: '#3b3f4e',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginRight: 'auto',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
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
    marginRight: 12,
  },
  courseImage: {
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
  overviewContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  overviewTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8,
  },
  overviewText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#444',
  },
  overviewStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  stat: {
    alignItems: 'center',
  },
  statNumber: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  reviewContainer: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  reviewCard: {
    marginBottom: 16,
    backgroundColor: '#f5f5f5',
    padding: 12,
    borderRadius: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  reviewUser: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  reviewRating: {
    fontSize: 14,
    color: '#444',
  },
  reviewComment: {
    fontSize: 14,
    color: '#555',
  },
});
