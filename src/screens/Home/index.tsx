import React from 'react';
import {  SafeAreaView } from 'react-native';

import {Lists, User} from '../../components'


export default function App() {



  return (
    <SafeAreaView style={{flex:1}}>
      <User 
      profile={require('../../../assets/daniel.jpeg')}
      name='Daniel Kakona'
      description='Software Engineer'
      />
      <Lists.Questions /> 

    </SafeAreaView>  

  );
}


