import AsyncStorage from '@react-native-community/async-storage';
import React from 'react'
import { View, StyleSheet, TouchableOpacity,Text } from 'react-native'
import { Buttons } from '../../components'
import { navigate, Routes } from '../../navigation/NavigationServices';

interface Props {
  
}

const Welcome = ({navigation}: any) => {

  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigate(Routes.AsyncStorage)
  };

  navigation.setOptions({
    headerShown: true,
    headerLeft: null,
    headerTitle: 'Welcome',
    headerRight: () => (
      <TouchableOpacity onPress={handleLogout} style={{marginHorizontal:10}}>
        <Text>Log out</Text>
      </TouchableOpacity>
    )
  });


  
  return (
    <View style={styles.screenWrapper}>
    <Buttons.Primary onClick={()=> navigate(Routes.Screen3)} title="Screen 3"/>
    </View>
  )
}

const styles = StyleSheet.create({
screenWrapper:{
  flex:1,
  justifyContent:'center'
}
})

export default Welcome



