import * as React from 'react';
import {NavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from './types';

export const navigationRef =
  React.createRef<NavigationContainerRef<RootStackParamList>>();

export function navigate<RouteName extends keyof RootStackParamList>(
  ...args: undefined extends RootStackParamList[RouteName]
    ?
        | [screen: RouteName]
        | [screen: RouteName, params: RootStackParamList[RouteName]]
    : [screen: RouteName, params: RootStackParamList[RouteName]]
): void {
  navigationRef.current?.navigate(...args);
}

export function goBack() {
  navigationRef.current?.goBack();
}
