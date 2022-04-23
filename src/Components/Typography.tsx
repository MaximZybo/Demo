import React from 'react';
import {Text, StyleProp, TextStyle} from 'react-native';

type TypographyProps = {
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
};

export const Typography = ({children, style}: TypographyProps) => {
  return <Text style={style}>{children}</Text>;
};
