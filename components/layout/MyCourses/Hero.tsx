// components/layout/MyCourses/Hero.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HeroSection = () => {
  return (
    <View style={styles.wrapper}>
      {/* Centered Title */}
      <Text style={styles.sectionTitle}>My Courses</Text>

      <View style={styles.container}>
        {/* Left Side: Text & Button */}
        <View style={styles.leftSide}>
          <Text style={styles.heading}>
            Courses that boost{'\n'}your career!
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Check Now</Text>
          </TouchableOpacity>
        </View>

        {/* Right Side: Image */}
        <View style={styles.rightSide}>
          <Image
            source={require('@/assets/images/icon.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

export default HeroSection;

const styles = StyleSheet.create({
  wrapper: {
    padding: 16,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#000',
    textAlign: 'center', // 👈 Center the title text
    marginTop: 20
  },
  container: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftSide: {
    flex: 1,
    paddingRight: 8,
  },
  rightSide: {
    flex: 1,
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#3D4451',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 14,
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: '#f1f1f1',
    borderRadius: 4,
  },
});
