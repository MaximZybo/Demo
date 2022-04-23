import React from 'react';
import {Button, Alert} from 'react-native';
import {Typography} from '@/Components/Typography';
import {BeforeAuthScreenProps} from '@/Navigators/types';
import {Screen} from '@/Components/Screen';

export const Welcome = ({navigation}: BeforeAuthScreenProps<'Welcome'>) => {
  const signInPress = () => navigation.navigate('SignIn');

  const registerPress = () => Alert.alert('Coming soon');

  return (
    <Screen>
      <Typography>Welcome Screen</Typography>
      <Button title="Sign In" onPress={signInPress} />
      <Button title="Register" onPress={registerPress} />
    </Screen>
  );
};
