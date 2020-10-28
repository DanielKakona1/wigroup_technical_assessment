import React from 'react'
import { View, Text,Image, StyleSheet, ImageRequireSource } from 'react-native'

interface userProps {
  profile: ImageRequireSource,
  name: string,
  description: string
}

const User = ({profile,name,description}: userProps) => {
  return (
<View style={styles.userContainer}>
  <View>
     <Image source={profile} style={styles.userImg} />
  </View>

  <View>
    <Text style={styles.name}>{name}</Text>
  <Text>{description}</Text>
  </View>
</View>
  )
}
const styles = StyleSheet.create({
  userContainer: {
    flexDirection:'row', 
    justifyContent:'space-between', 
    marginHorizontal: 15, 
    marginVertical:50},
  userImg:{
    width:50, 
    height:50, 
    borderRadius:100
  },
  name : {
    fontSize:20, 
    fontWeight:'bold'
  }
});

export default User
