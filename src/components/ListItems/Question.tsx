import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Colors from '../../constants/Colors';

interface userProps {
  title: string,
  description: string,
  number: number,
  background:string
  onPress: ()=> void
}

const Question = ({title,description,number,background,onPress}: userProps) => {
  return (
<TouchableOpacity 
style={[{  backgroundColor:background}, styles.questionContainer]}
onPress={onPress}
>
  <Text style={styles.title}>{title}</Text>
  <Text style={styles.description}>{description} </Text>
  <View style={styles.questionWrapper}>
  <Feather
        name="lock"
        size={15}
        color={Colors.white}
      />
         <Text style={styles.questionNumber}>Question{number}</Text>
  </View>

</TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  questionContainer: {
  
    marginHorizontal: 15, 
    borderRadius:12, 
    marginVertical:5,
    padding:20
  },
  title:{
    color:Colors.white, 
    fontSize:20, 
    marginVertical:2
  },
  description : { 
    color:Colors.white, 
    fontWeight:'300',
    fontSize:12
  },
  questionWrapper:{
    flexDirection:'row', 
    marginTop:10
  },
  questionNumber:{
    color:Colors.white, 
    fontStyle:'italic'
  }
});

export default Question;
