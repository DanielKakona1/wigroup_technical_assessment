import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Screens from './src/screens';
import { navigationRef, Routes } from './src/navigation/NavigationServices';
;

const Stack = createStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name={Routes.Home} component={Screens.Home} />
        <Stack.Screen name={Routes.AutoSearch} component={Screens.AutoSearch} />
        <Stack.Screen name={Routes.Wikipedia} component={Screens.Wikipedia} />
        <Stack.Screen name={Routes.WikipediaDetails} component={Screens.WikipediaDetails} />
        <Stack.Screen name={Routes.AsyncStorage} component={Screens.AsyncStorage} />
        <Stack.Screen name={Routes.Welcome} component={Screens.Welcome} />
        <Stack.Screen name={Routes.Screen3} component={Screens.Screen3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppContainer;
