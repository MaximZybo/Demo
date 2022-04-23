import React, {useCallback} from 'react';
import {
  BackHandler,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {COLORS} from '@/Constants/colors';

type BaseModalProps = {
  allowCloseModal?: boolean;
  children: React.ReactNode[] | React.ReactNode;
  backgroundPress?: () => void;
};

export const BaseModal = ({
  allowCloseModal = true,
  children,
  backgroundPress,
}: BaseModalProps) => {
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        if (allowCloseModal) {
          return false;
        } else {
          return true;
        }
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [allowCloseModal]),
  );

  const onBackgroundPress = () => {
    if (allowCloseModal) {
      if (backgroundPress) {
        backgroundPress();
      } else {
        navigation.goBack();
      }
    }
  };
  return (
    <>
      <StatusBar translucent />
      <TouchableOpacity
        style={styles.container}
        onPress={onBackgroundPress}
        activeOpacity={1}>
        {children}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.grey_500,
    justifyContent: 'center',
  },
});
