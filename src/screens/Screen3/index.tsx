import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Buttons } from '../../components'
import { navigate, Routes } from '../../navigation/NavigationServices';



const Screen3 = () => {
  
  return (
    <View style={styles.screenWrapper}>
    <Buttons.Primary onClick={()=> navigate(Routes.Welcome)} title="Screen 2"/>
    </View>
  )
}

const styles = StyleSheet.create({
screenWrapper:{
  flex:1,
  justifyContent:'center'
}
})

export default Screen3



