import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import List from '../pages/List';
import View from '../pages/View';
import Form from '../pages/Form';
import Settings from '../pages/Settings';

const Stack = createStackNavigator();

function AppNavigator(props) {
    return(
        <Stack.Navigator>
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="View" component={View} />
            <Stack.Screen name="Form" component={Form} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    )
}

export default AppNavigator;