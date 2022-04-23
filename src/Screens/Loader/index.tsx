import React from 'react';
import {ActivityIndicator} from 'react-native';
import {BaseModal} from '@/Components/BaseModal';
import {COLORS} from '@/Constants/colors';

export const Loader = () => (
  <BaseModal allowCloseModal={false}>
    <ActivityIndicator size="large" color={COLORS.deepskyblue} />
  </BaseModal>
);
