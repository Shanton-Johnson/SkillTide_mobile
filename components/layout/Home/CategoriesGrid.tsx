// components/layout/Home/CategoriesGrid.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

interface Category {
  id: string;
  name: string;
  icon: string;
}

const categories: Category[] = [
  { id: '1', name: 'Business', icon: 'bar-chart' },
  { id: '2', name: 'Design', icon: 'edit-3' },
  { id: '3', name: 'Code', icon: 'code' },
  { id: '4', name: 'Writing', icon: 'file-text' },
  { id: '5', name: 'Movie', icon: 'video' },
  { id: '6', name: 'Language', icon: 'globe' },
];

const CategoriesGrid: React.FC = () => {
  const renderItem = ({ item }: { item: Category }) => (
    <TouchableOpacity style={styles.card}>
      <View style={styles.iconBox}>
        <Icon name={item.icon} size={18} color="#fff" />
      </View>
      <Text style={styles.label}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <TouchableOpacity>
          <Text style={styles.viewMore}>View more</Text>
        </TouchableOpacity>
      </View>

      {/* Grid */}
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={styles.row}
        scrollEnabled={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },
  viewMore: {
    fontSize: 14,
    color: '#4A5164',
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  card: {
    flex: 1,
    backgroundColor: '#F9F9FB',
    padding: 12,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  iconBox: {
    backgroundColor: '#4A5164',
    padding: 8,
    borderRadius: 4,
    marginRight: 10,
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
});

export default CategoriesGrid;
