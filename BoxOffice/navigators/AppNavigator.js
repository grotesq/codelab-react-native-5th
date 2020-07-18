import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BoxOfficeNavigator from './BoxOfficeNavigator';

const Drawer = createDrawerNavigator();

function AppNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="BoxOfficeNavigator" component={ BoxOfficeNavigator }/>
        </Drawer.Navigator>
    )
}

export default AppNavigator;