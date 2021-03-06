import React, { useCallback, useState, useEffect } from 'react';
import { FlatList, StyleSheet, RefreshControl } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const Home = ({ navigation }) => {
    const [palettes, setPalettes] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);
    const fetchColourPaletteData = useCallback(async () => {
        const result = await fetch('https://color-palette-api.kadikraman.vercel.app/palettes');
        if (result.ok) {
            const palettes = await result.json();
            setPalettes(palettes);
        }
    }, []);

    const handleRefresh = useCallback(async () => {
        setIsRefreshing(true);
        await fetchColourPaletteData();
        setTimeout(() =>
            setIsRefreshing(false),
            1000)
    }, [])
    useEffect(() => {
        fetchColourPaletteData()
    }, []);
    return (
        <FlatList
            style={styles.list}
            data={palettes}
            keyExtractor={item => item.paletteName}
            renderItem={({ item }) => (
                <PalettePreview
                    onPress={() => navigation.push('ColourPalette', item)}
                    palette={item}
                />
            )}
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
        />
    );
};

const styles = StyleSheet.create({
    list: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white',
    },
});

export default Home;