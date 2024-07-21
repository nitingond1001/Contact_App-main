import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';

import HomeScreen from './src/screens/homeScreen.js';
import FavoritesScreen from './src/screens/favoritesScreen.js';

import rootReducer from './src/slices/index.js';

const store = configureStore({reducer: rootReducer});
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;
              if (route.name === 'Home') {
                iconName = focused ? 'ios-home' : 'ios-home';
              } else if (route.name === 'Favorites') {
                iconName = focused ? 'ios-heart' : 'ios-heart-empty';
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Favorites" component={FavoritesScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
