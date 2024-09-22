import React, { useState } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Settings from '../screens/Settings';
import HomeStack from './HomeStack';
import LibraryStack from './LibraryStack';
import darkMode from '../styles/darkMode';
import lightMode from '../styles/lightMode';


const Tabs = createMaterialBottomTabNavigator();
const BottomTabNav = () => {
    const [appearance, setAppearance] = useState(lightMode);
  return (
    <Tabs.Navigator
            initialRouteName='HomeStack'
            activeColor='#00468B'
            barStyle={{ backgroundColor: '#FFFFFF' }}>
            <Tabs.Screen
                name='HomeStack'
                component={HomeStack}
                options={{
                    tabBarLabel: 'Home', tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='home' color={color} size={26} />
                    )
                }} />
                <Tabs.Screen
                name='LibraryStack'
                component={LibraryStack}
                options={{
                    tabBarLabel: 'Library', tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='account' color={color} size={26} />
                    )
                }} />
                <Tabs.Screen
                name='Setting'
                component={Settings}
                options={{
                    tabBarLabel: 'Settings', tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name='bell' color={color} size={26} />
                    )
                }} />
        </Tabs.Navigator>
  )
}

export default BottomTabNav