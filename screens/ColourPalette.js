import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';



const ColourPalette = ({ route }) => {
    const { colors } = route.params;
    return (
        <FlatList
            style={styles.container}
            data={colors}
            renderItem={({ item }) => (
                <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
            )}
            keyExtractor={item => item.hexCode}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        paddingHorizontal: 10,
        backgroundColor: 'white',
    },
});

export default ColourPalette;