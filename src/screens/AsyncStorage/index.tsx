import React, { useEffect } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
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
  email: Yup.string().email('Invalid email').required('Required')
});

const AsyncStorageS = (props: Props) => {

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const handleLogin = (data: any) => {
    dispatch({type: actionTypes.LOGIN, username: data.email,password: data.password })
   navigate(Routes.Welcome)
  };

  useEffect(() => {
    setTimeout(async() => {
      // setIsLoading(false);
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch(e) {
        console.log(e);
      }
      // console.log('user token: ', userToken);
      dispatch({ type: actionTypes.RETRIEVE_TOKEN, token: userToken });
    }, 1000);
  }, []);

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor:'white'}}>
			<View style={{flex:1, borderBottomLeftRadius:80, backgroundColor:"#FFC107", alignContent:"center", justifyContent:"flex-end"}} />
	<View style={{
        flex:1,
        backgroundColor:"#FFC107" 
  }}>
	<View style={{
    flex:1,
    backgroundColor:'white', 
    borderTopRightRadius:80,
  }
    
    }>
      <View style={{marginHorizontal:20, marginTop:30}}>
      <Text style={{fontSize:30, textAlign:'center'}}>Login</Text>

      <Formik
            initialValues={{ email: '', password: '' }}
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
                                      placeholder="Email"
                                      onTextChange={handleChange('email')}
                                      value={values.email}
                                      error={errors.email}
                                      touch={touched.email}
                                    
                                      
                                      
                                     
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

  <View style={{
           flex:1/3,
           backgroundColor:"#6F0F71" 
  }}>
    <View style={{
             flex:1,
             backgroundColor:"white" ,
             borderBottomLeftRadius:80,
             borderBottomRightRadius:80
    }}>

    </View>
  </View>
					<View
          style={{
						backgroundColor:"#6F0F71",
						height:10,
						justifyContent:"space-evenly",
						padding:80,
            alignItems:"center",
            
            
           
          }}
					>

						

			
			</View>
		</View>
  )
}

export default AsyncStorageS
