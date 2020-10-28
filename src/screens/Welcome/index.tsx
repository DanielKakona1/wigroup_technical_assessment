import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Buttons } from '../../components'

interface Props {
  
}

const Welcome = (props: Props) => {
  return (
    <View style={styles.screenWrapper}>
    <Buttons.Primary onClick={()=> console.log('hhh')} title="Screen 3"/>
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



