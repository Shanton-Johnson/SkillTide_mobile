import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const UserProfileCard = () => {
  return (
    <View style={styles.container}>
      {/* Header Background */}
      <View style={styles.header}>
        {/* Placeholder for background image */}
      </View>

      {/* Profile Image */}
      <View style={styles.profileImageContainer}>
        <View style={styles.profileImagePlaceholder} />
      </View>

      {/* User Info */}
      <Text style={styles.name}>Martha Rosie</Text>
      <Text style={styles.role}>UX/UI Designer</Text>

      {/* Stats */}
      <View style={styles.statsContainer}>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>25</Text>
          <Text style={styles.statLabel}>Save</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>On Going</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statNumber}>98</Text>
          <Text style={styles.statLabel}>Completed</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingBottom: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  header: {
    height: 100,
    width: '100%',
    backgroundColor: '#F1F1F1',
  },
  profileImageContainer: {
    marginTop: -40,
    marginBottom: 10,
    alignItems: 'center',
  },
  profileImagePlaceholder: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#C4C4C4',
    borderWidth: 4,
    borderColor: '#fff',
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  role: {
    fontSize: 14,
    color: '#777',
    marginBottom: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
  },
  statBox: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  statLabel: {
    fontSize: 12,
    color: '#777',
  },
});

export default UserProfileCard;
