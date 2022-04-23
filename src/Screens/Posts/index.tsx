import React from 'react';
import {FlatList, StyleSheet, ListRenderItemInfo} from 'react-native';
import {CardPost} from '@/Components/Cards/CardPost';
import {CardSeparator} from '@/Components/Cards/CardSeparator';
import {Screen} from '@/Components/Screen';
import {useUsersPostsGetQuery} from '@/Services/placeholder';
import {AfterAuthScreenProps} from '@/Navigators/types';
import {TPost} from '@/Types/Placeholder';

export const Posts = ({route}: AfterAuthScreenProps<'Posts'>) => {
  const {data: usersPosts} = useUsersPostsGetQuery(route?.params?.userId);

  const renderPost = ({item}: ListRenderItemInfo<TPost>) => (
    <CardPost post={item} />
  );

  return (
    <Screen>
      <FlatList
        data={usersPosts}
        renderItem={renderPost}
        style={styles.list}
        ItemSeparatorComponent={CardSeparator}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  list: {
    marginVertical: 10,
  },
});
