import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Search from '../pages/Search';
import MovieDetail from '../pages/MovieDetail';

const Stack = createStackNavigator();
  
function SearchNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }} >
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="MovieDetail" component={MovieDetail} />
        </Stack.Navigator>
    )
}

export default SearchNavigator;