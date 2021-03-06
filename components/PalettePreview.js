import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, FlatList } from 'react-native';

const PalettePreview = ({ palette, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.heading}>{palette.paletteName}</Text>
      <FlatList
        style={styles.list}
        keyExtractor={item => item.colorName}
        data={palette.colors.slice(0, 5)}
        renderItem={({ item }) => (
          <View style={[styles.color, { backgroundColor: item.hexCode }]} />
        )}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  list: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  color: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    height: 40,
    width: 40,
    marginRight: 10,
  },
});

export default PalettePreview;