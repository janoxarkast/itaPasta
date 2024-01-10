import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


// Importa le tue schermate
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

// Crea uno stack navigator
const Tab = createBottomTabNavigator();


function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator >
                <Tab.Screen options={{ headerShown: false }} name="Home" component={HomeScreen}/>
                <Tab.Screen name="Details" component={DetailsScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
