// components/layout/Home/Header.tsx
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // You can also use FontAwesome or MaterialIcons

const Header: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Hello!</Text>
        <Text style={styles.subtext}>What do you want to learn today?</Text>
      </View>
      <View style={styles.icons}>
        <TouchableOpacity style={styles.iconSpacing}>
          <Icon name="shopping-cart" size={24} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" size={24} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtext: {
    fontSize: 14,
    color: '#555',
  },
  icons: {
    flexDirection: 'row',
  },
  iconSpacing: {
    marginRight: 16,
  },
});

export default Header;
