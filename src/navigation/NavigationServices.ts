/* eslint-disable no-unused-vars */
import * as React from 'react';
import { NavigationContainerRef } from '@react-navigation/native';

export const navigationRef = React.createRef<NavigationContainerRef>();

export function navigate(name: Routes, params?: object) {
  return navigationRef?.current?.navigate(name, params);
}

export enum Routes {
  Home= 'Home',
  AutoSearch = 'AutoSearch',
  Wikipedia = 'Wikipedia',
  WikipediaDetails = 'WikipediaDetails',
  AsyncStorage = 'AsyncStorage',
  Welcome = 'Welcome'
}

export type StackParamList = {
  [Routes.Home]: undefined;
  [Routes.AutoSearch]: undefined;
  [Routes.Wikipedia]: undefined;
  [Routes.WikipediaDetails]: undefined;
  [Routes.AsyncStorage]: undefined;
  [Routes.Welcome]: undefined;
};
