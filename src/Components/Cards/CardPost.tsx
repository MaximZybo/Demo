import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Typography} from '@/Components/Typography';
import {TPost} from '@/Types/Placeholder';

type TProps = {
  post: TPost;
};

export const CardPost = ({post}: TProps) => (
  <View style={styles.container}>
    <Typography style={styles.header}>{post.title}</Typography>
    <Typography>{post.body}</Typography>
  </View>
);

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
  },
  header: {
    marginBottom: 10,
    borderBottomWidth: 1,
  },
});
