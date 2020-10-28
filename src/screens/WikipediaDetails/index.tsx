import { WebView } from 'react-native-webview';
import React, { useEffect } from 'react';
import { ActivityIndicator, SafeAreaView,Text } from 'react-native';
import { wiki } from '../../config/axios';


const WikipediaDetail =  ({ navigation,route }: any) => {

  navigation.setOptions({
    headerShown: true,
})

  const [url, setUrl] = React.useState('')

  const RetrievingPageURLByPageID = async() => {
    try {
      const results = await wiki.get('?origin=*', {
        params: {
          action: 'query',
          prop:'info',
          pageids: route.params.pageid,
          inprop:'url',
          format: 'json'
        } 
      });
  setUrl(results.data.query.pages[route.params.pageid].fullurl)
      
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
    onError={() =>   RetrievingPageURLByPageID()}
    startInLoadingState={true}
    renderLoading={() => ( <ActivityIndicator color='red' /> )}
  />  
</SafeAreaView>
)

};

export default WikipediaDetail;