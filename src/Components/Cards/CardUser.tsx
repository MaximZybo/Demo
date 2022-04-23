import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Typography} from '@/Components/Typography';
import {TUser} from '@/Types/Placeholder';

type TProps = {
  user: TUser;
  onPress: () => void;
};

export const CardUser = ({user, onPress}: TProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Typography>{user.name}</Typography>
    <Typography>{user.email}</Typography>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
});
