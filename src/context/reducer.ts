import React from 'react';

// Action Types
export enum actionTypes  {
  RETRIEVE_TOKEN = 'RETRIEVE_TOKEN',
  LOGIN= 'LOGIN',
  LOGOUT = 'LOGOUT'
}

export const initialLoginState = {
  isLoading: true,
  userName: null,
  userToken: null,
};

const loginReducer = (prevState:any, action:any) => {
  switch( action.type ) {
    case actionTypes.RETRIEVE_TOKEN: 
      return {
        ...prevState,
        userToken: action.token,
        isLoading: false,
      };
    case actionTypes.LOGIN: 
      return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading: false,
      };
    case actionTypes.LOGOUT: 
      return {
        ...prevState,
        userName: null,
        userToken: null,
        isLoading: false,
      };
  }
};

export default loginReducer;