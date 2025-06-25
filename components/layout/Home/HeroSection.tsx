// components/layout/Home/HeroSection.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const HeroSection: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Left Side - Text */}
      <View style={styles.textContainer}>
        <Text style={styles.category}>PROJECT MANAGEMENT</Text>
        <Text style={styles.discount}>20% OFF</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>JOIN NOW</Text>
        </TouchableOpacity>
      </View>

      {/* Right Side - Image */}
      <View style={styles.imageContainer}>
        <Image
          source={require('@/assets/images/placeholder.jpg')} // Replace with your image
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F9F9FB',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 20,
  },
  textContainer: {
    flex: 1,
    marginRight: 12,
  },
  category: {
    fontSize: 12,
    color: '#333',
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  discount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 6,
  },
  button: {
    backgroundColor: '#4A5164',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 4,
    marginTop: 4,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  imageContainer: {
    width: 80,
    height: 80,
    backgroundColor: '#EEE',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    tintColor: '#CCC', // matches the placeholder look
  },
});

export default HeroSection;
