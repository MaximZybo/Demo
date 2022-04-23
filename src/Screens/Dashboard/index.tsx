import React from 'react';
import {Button, FlatList, StyleSheet, ListRenderItemInfo} from 'react-native';
import {useAppDispatch} from '@/Store/hooks';
import {signOut} from '@/Store/Auth/authSlice';
import {useUsersGetQuery} from '@/Services/placeholder';
import {AfterAuthScreenProps} from '@/Navigators/types';
import {Screen} from '@/Components/Screen';
import {CardUser} from '@/Components/Cards/CardUser';
import {CardSeparator} from '@/Components/Cards/CardSeparator';
import {TUser} from '@/Types/Placeholder';

export const Dashboard = ({navigation}: AfterAuthScreenProps<'Dashboard'>) => {
  const dispatch = useAppDispatch();

  const {data: users} = useUsersGetQuery();

  const signOutPress = () => dispatch(signOut());

  const renderUser = ({item}: ListRenderItemInfo<TUser>) => {
    const onPress = () => navigation.navigate('Posts', {userId: item.id});

    return <CardUser user={item} onPress={onPress} />;
  };

  return (
    <Screen>
      <FlatList
        data={users}
        renderItem={renderUser}
        style={styles.list}
        ItemSeparatorComponent={CardSeparator}
      />
      <Button title="Sign Out" onPress={signOutPress} />
    </Screen>
  );
};

const styles = StyleSheet.create({
  list: {
    marginVertical: 10,
  },
});
