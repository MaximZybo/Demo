import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useAppSelector} from '@/Store/hooks';
import {getIsSignedIn} from '@/Store/Auth/selectors';
import {Loader} from '@/Screens/Loader';
import {navigationRef} from './reference';
import {BeforeAuth} from './BeforeAuth';
import {AfterAuth} from './AfterAuth';
import {RootStackParamList} from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {
  const isSignedIn = useAppSelector(getIsSignedIn);

  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isSignedIn ? (
          <Stack.Screen name="AfterAuth" component={AfterAuth} />
        ) : (
          <Stack.Screen name="BeforeAuth" component={BeforeAuth} />
        )}
        <Stack.Group
          screenOptions={{
            animation: 'fade',
            presentation: 'transparentModal',
            gestureEnabled: false,
          }}>
          <Stack.Screen name="Loader" component={Loader} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
