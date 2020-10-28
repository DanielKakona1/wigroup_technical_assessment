import Question from '../ListItems/Question';
import React from 'react';
import { FlatList} from 'react-native';
import {questions} from '../../config/QuestionsData'
import {navigate} from '../../navigation/NavigationServices';


const Questions = () => {
  return (
    <FlatList
      keyExtractor={(item): string => `${item?.id}`}
      data={questions}
      contentContainerStyle={{ backgroundColor: '#f7f7f7' }}
      renderItem={({ item }) => (
      <Question 
      title={item.title}
      description={item.description}
      number={item.id}
      background={item.background}
      onPress= {()=>  navigate(item.screen)}
      />
      )
    }
    />
  );
};

export default Questions;
