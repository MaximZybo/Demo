import React from 'react';
import {Button} from 'react-native';
import {useAppDispatch} from '@/Store/hooks';
import {signIn} from '@/Store/Auth/authSlice';
import {Screen} from '@/Components/Screen';
import {InputText} from '@/Components/Inputs/InputText';
import {BeforeAuthScreenProps} from '@/Navigators/types';

export const SignIn = ({}: BeforeAuthScreenProps<'SignIn'>) => {
  const dispatch = useAppDispatch();

  const signInPress = () => dispatch(signIn());

  return (
    <Screen>
      <InputText />
      <InputText />
      <Button title="Sign In" onPress={signInPress} />
    </Screen>
  );
};
