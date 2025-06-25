// components/features/CourseDetails/CourseDetailsHeader.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons, Entypo } from '@expo/vector-icons';

const CourseDetailsHeader = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Ionicons name="chevron-back" size={24} color="#1a1a1a" />
      </TouchableOpacity>

      <Text style={styles.title}>Course details</Text>

      <View style={styles.rightIcons}>
        <TouchableOpacity style={styles.iconSpacing}>
          <Ionicons name="bookmark-outline" size={20} color="#1a1a1a" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={18} color="#1a1a1a" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  title: {
    position: 'absolute',
    left: 0,
    right: 0,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 16,
    color: '#1a1a1a',
  },
  rightIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 12,
  },
});

export default CourseDetailsHeader;
