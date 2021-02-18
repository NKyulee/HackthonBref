import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from "../components/login/";
import Home from '../components/Home'

const Stack = createStackNavigator();

export default function Root() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Bref" component={Home} />
    </Stack.Navigator>
  );
};

