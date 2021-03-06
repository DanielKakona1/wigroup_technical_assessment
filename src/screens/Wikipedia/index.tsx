import React from 'react'
import { SafeAreaView, Text, View , TouchableOpacity } from 'react-native'
import { wiki } from '../../config/axios'
import { Inputs, Lists } from '../../components'

interface Props {
  title: string
}


const Wikipedia = ({navigation}: any) => {
  navigation.setOptions({
    headerShown: true,
})
  const [result, setResult] = React.useState([]);

const handleSearch = async (search:string) => {
  
if (search ===''){ 
  setResult([]);
  return 
}
  try {
    const results = await wiki.get('?origin=*', {
      params: {
        action: 'query',
        list: 'search',
        srsearch: search,
        format: 'json'
      } 
    });
    setResult(results.data.query.search);
    
  } catch (err) {
    console.log(err);
    alert('Failed to search wikipedia');
  } 

};
  return (
    <SafeAreaView style={{flex:1}}>
    
      <Inputs.Default
      placeholder="Search"
      onTextChange={text => handleSearch(text)}
      />
      
      <Lists.WikiSearch results={result} />
     
    </SafeAreaView>
  )
}

export default Wikipedia
