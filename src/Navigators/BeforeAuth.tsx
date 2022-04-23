import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Welcome} from '@/Screens/Welcome';
import {SignIn} from '@/Screens/SignIn';
import {BeforeAuthParamList} from './types';

const Stack = createNativeStackNavigator<BeforeAuthParamList>();

export const BeforeAuth = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{title: 'Sign In'}}
      />
    </Stack.Navigator>
  );
};
