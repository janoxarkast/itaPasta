import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, FlatList, StyleSheet, TouchableOpacity } from 'react-native';



function HomeScreen() {
    const navigation = useNavigation();
    const renderRecipeItem = ({ item }) => (
        <TouchableOpacity
            style={styles.recipeItem}
            onPress={() => navigation.navigate('Details', { itemId: item.title })}
        >
                <Image source={item.previewImage} style={styles.previewImage} />
                <Text style={styles.recipeTitle}>{item.title}</Text>
        </ TouchableOpacity>

);


    return (
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Le Nostre Ricette</Text>
            <FlatList
                data={recipesData}
                keyExtractor={(item) => item.id}
                renderItem={renderRecipeItem}
                horizontal={false} // Imposta su 'true' se desideri una visualizzazione orizzontale
                numColumns={2} // Imposta su '1' se desideri una visualizzazione verticale
                contentContainerStyle={styles.recipeList}
            />
        </View>
    );
}

const recipesData = [
    {
        id: '1',
        title: 'Pasta al Pesto',
        previewImage: require('../assets/pasta.jpeg'),
    },
    {
        id: '2',
        title: 'Insalata Caprese',
        previewImage: require('../assets/pasta.jpeg'),
    },
    {
        id: '3',
        title: 'Sushi Varietà',
        previewImage: require('../assets/pasta.jpeg'),
    },
    {
        id: '4',
        title: 'Boccoloni alla milanese',
        previewImage: require('../assets/pasta.jpeg'),
    },
    {
        id: '5',
        title: 'Sushi Varietà',
        previewImage: require('../assets/pasta.jpeg'),
    },
    {
        id: '6',
        title: 'pagnotta',
        previewImage: require('../assets/pasta.jpeg'),
    },
    {
        id: '7',
        title: 'Limone',
        previewImage: require('../assets/pasta.jpeg'),
    },
    {
        id: '8',
        title: 'Granita',
        previewImage: require('../assets/pasta.jpeg'),
    },
    // Aggiungi più dati delle ricette secondo necessità
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 2,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    recipeList: {
        justifyContent: 'space-between',
    },
    recipeItem: {
        width: '50%',
        flex: 1,
        margin: 8,
        borderRadius: 8,
        overflow: 'hidden',
    },
    previewImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 8,
    },
    recipeTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 8,
    },
});


export default HomeScreen;
