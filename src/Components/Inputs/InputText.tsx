import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

export const InputText = () => {
  return <TextInput style={styles.input} />;
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
