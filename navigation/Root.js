import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Home from "../components/Home";

const Stack = createStackNavigator();

export default function Root () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Bref" component={Home} />
    </Stack.Navigator>
  );
};

