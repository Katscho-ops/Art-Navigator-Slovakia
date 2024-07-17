import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Screens/HomeScreen';
import MuseumsScreen from './Screens/MuseumsScreen';
import GalleriesScreen from './Screens/GalleriesScreen';
import MapScreen from './Screens/MapScreen';
import ProfileScreen from './Screens/ProfileScreen';
import FavoritesScreen from './Screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Museums" component={MuseumsScreen} />
        <Tab.Screen name="Galleries" component={GalleriesScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
        <Tab.Screen name="Favorites" component={FavoritesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
