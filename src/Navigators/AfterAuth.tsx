import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Dashboard} from '@/Screens/Dashboard';
import {Posts} from '@/Screens/Posts';
import {AfterAuthParamList} from './types';

const Stack = createNativeStackNavigator<AfterAuthParamList>();

export const AfterAuth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="Posts" component={Posts} />
    </Stack.Navigator>
  );
};
