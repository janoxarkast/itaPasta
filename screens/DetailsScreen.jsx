import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';

function DetailsScreen() {
    const route = useRoute();
    const { itemId } = route.params;

    return (
        <View>
            <Text>Details Screen</Text>
            <Text>Item ID: {itemId}</Text>
        </View>
    );
}

export default DetailsScreen;
