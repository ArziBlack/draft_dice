import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNav from './BottomTabNav';
import Internet from '../screens/Internet';
import Splash from '../screens/Splash';
import About from '../screens/About';

const Stack = createNativeStackNavigator();
const StackNav = () => {
  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Engineering Drawing Tutorials"
        component={BottomTabNav}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Connection"
        component={Internet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="about"
        component={About}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
