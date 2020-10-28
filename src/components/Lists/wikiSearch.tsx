import React from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View} from 'react-native';
import WebView from 'react-native-webview';
import {navigate, Routes} from '../../navigation/NavigationServices';
import HTML from 'react-native-render-html';


interface wikiSearchProps {
  results: Array<{
    pageid: number,
    title: string,
    snippet:string
  }>
 
}

const WikiSearch = ({results}:wikiSearchProps) => {
  return (
    <FlatList
      keyExtractor={(item): string => `${item?.pageid}`}
      
      data={results}
      contentContainerStyle={{ backgroundColor: '#f7f7f7' }}
      renderItem={({ item }) => (
        <TouchableOpacity style={{
          borderColor:'lightgrey',
          borderBottomWidth:1,
          padding:20
        }}
        onPress= {()=> navigate(Routes.WikipediaDetails, {
          pageid:item.pageid
        })}
        >
           <Text style={{fontWeight:'bold'}}>{item.title}</Text>
           <HTML html={item.snippet} imagesMaxWidth={Dimensions.get('window').width} />
          
        </TouchableOpacity>
      )
    }
    />
  );
};

export default WikiSearch;
