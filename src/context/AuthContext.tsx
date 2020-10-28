import React, {createContext, useContext} from 'react';
import  loginReducer, { actionTypes, initialLoginState } from './reducer';
import AsyncStorage from '@react-native-community/async-storage';


interface IContext {
  loginState?: any;
  dispatch?:any;
}

export const AuthContext  = createContext<IContext>({})

export const StateProvider = ({children}:any )=> {

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
  
  const authContext = React.useMemo(() => ({

    signIn: async(username: string, password: string) => {
      let userToken = null;
      
      try {
        userToken='hsjsv'
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: actionTypes.LOGIN, id: username, token: userToken });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: actionTypes.LOGOUT });
    }
  }), []);

  return (
  <AuthContext.Provider value ={{loginState,dispatch}}>
    {children}
  </AuthContext.Provider>
)}

export const useStateValue = () => useContext(AuthContext);