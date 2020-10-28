import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import { Formik } from 'formik';
import * as Yup from 'yup'
import { Buttons, Inputs } from '../../components'
import loginReducer, { actionTypes, initialLoginState } from '../../context/reducer';
import AsyncStorage from '@react-native-community/async-storage';
import { navigate, Routes } from '../../navigation/NavigationServices';



interface Props {
  
}
const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  username: Yup.string()
    .min(5, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
});

const AsyncStorageS = (props: Props) => {

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const handleLogin = async (data: any) => {
    dispatch({type: actionTypes.LOGIN, username: data.username,password: data.password })
    await AsyncStorage.setItem('userToken', data.username);
   navigate(Routes.Welcome)
  };


  useEffect(() => {
    setTimeout(async() => {
    
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        if (userToken ) {navigate(Routes.Welcome)}
      } catch(e) {
        console.log(e);
      }
     
      dispatch({ type: actionTypes.RETRIEVE_TOKEN, token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={styles.loader}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <View style={styles.wrapper}>
			<View style={styles.header} />
	      <View style={{flex:1,backgroundColor:"#FFC107" }}>
	     <View style={styles.headerUnderlay}>
      <View style={styles.formWrapper}>
      <Text style={styles.title}>Login</Text>

      <Formik
            initialValues={{ username: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={values => handleLogin(values)}
          >
            {({
              handleChange,
              handleSubmit,
              values,
              errors,
              touched
            }) => (
              <>
                    <Inputs.Default 
                      placeholder="Username"
                      onTextChange={handleChange('username')}
                      value={values.username}
                      error={errors.username}
                      touch={touched.username}
                                    
                    />
                       <Inputs.Default 
                        placeholder="Password"
                        secure
                        onTextChange={handleChange('password')}
                        value={values.password}
                        error={errors.password}
                        touch={touched.password}
                       
                    />


                <Buttons.Primary onClick={handleSubmit} title="Login" />
              </>
            )}
          </Formik>

      </View>

  </View>
  </View>

  <View style={styles.footerUnderlay}>
    <View style={styles.footerTop}/>
  </View>
					<View style={styles.footerBottom}/>
		</View>
  )
}
const styles = StyleSheet.create({
  wrapper:{
    flex: 1, 
    backgroundColor:'white'
  },
  header: {
    flex:1, 
    borderBottomLeftRadius:80, 
    backgroundColor:"#FFC107", 
    alignContent:"center", 
    justifyContent:"flex-end"
  },
  headerUnderlay:{
    flex:1,
    backgroundColor:'white', 
    borderTopRightRadius:80,
  }
  ,
  title:{
    fontSize:30, 
    textAlign:'center'
  },
  loader: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  formWrapper:{
    marginHorizontal:20, 
    marginTop:30
  },
  footerUnderlay:{
    flex:1/3,
    backgroundColor:"#6F0F71" 
  },

  footerTop:{
    flex:1,
    backgroundColor:"white" ,
    borderBottomLeftRadius:80,
    borderBottomRightRadius:80
  },

footerBottom: {
  backgroundColor:"#6F0F71",
  height:10,
  justifyContent:"space-evenly",
  padding:80,
  alignItems:"center",
}
})
export default AsyncStorageS
