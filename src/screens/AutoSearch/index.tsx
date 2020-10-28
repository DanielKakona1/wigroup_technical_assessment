import React from 'react';
import { Text, SafeAreaView, StyleSheet, View, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
import {Inputs} from '../../components'
import helpers from '../../helpers'

export default function AutoSearch({navigation}:any) {
  navigation.setOptions({
    headerShown: true,
})
  const [url, setUrl] = React.useState('')
  const [error, setError]= React.useState(false)
  const [touched, setTouched]= React.useState(false)

  const handleSearch = (url:string) => {
    if (!helpers.isUrl(url)) {
     setError(true)
      return;
    }
    setUrl(url)
    setError(false);
  };

  return (
    <SafeAreaView style={{flex:1}}>
      <Inputs.Default
      placeholder="Enter a valid URL"
      onTextChange={text => handleSearch(text)}
      touched={()=> setTouched(true)}
      />
   
      { (!error && touched )?
      <WebView 
      originWhitelist={['*']}
      source={{ uri: url }} 
      style={{ marginTop: 20 }}
      onError={() => setError(true)}
      startInLoadingState={true}
      renderLoading={() => ( <ActivityIndicator color='red' /> )}
      /> 
      : 
      (error && touched )?
      <View style={styles.errorContainer}>
      <Text style={styles.error}>Invalid Url</Text>
      </View> 
      : 
      null
    }
 </SafeAreaView>  

  );
}

const styles = StyleSheet.create({
  errorContainer: {
    flexDirection:'column', 
    justifyContent:'center',
    alignItems:'center'
  },
  error:{
    color:'red'
  }
});
