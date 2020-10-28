import { WebView } from 'react-native-webview';
import React, { useEffect } from 'react';
import { SafeAreaView,Text } from 'react-native';
import { wiki } from '../../config/axios';


const WikipediaDetail =  ({ route }) => {

  const [url, setUrl] = React.useState('')

  const RetrievingPageURLByPageID = async() => {
    try {
      const results = await wiki.get('?origin=*', {
        params: {
          action: 'query',
          prop:'info',
          pageids: 44364025,
          inprop:'url',
          format: 'json'
        } 
      });
  setUrl(results.data.query.pages[44364025].fullurl)
      
    } catch (err) {
      console.log(err);
      alert('Failed to search wikipedia');
    } 
  }

  useEffect( () => {

    RetrievingPageURLByPageID()

  }, [])
  
  return( 
  <SafeAreaView style={{flex:1}}>
   
   <WebView 
  originWhitelist={['*']}
  source={{ uri: url }} 
  style={{ marginTop: 20 }}
  />  
</SafeAreaView>
)

};

export default WikipediaDetail;