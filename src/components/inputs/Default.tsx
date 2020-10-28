import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Rounded } from '../Buttons'
import Colors from '../../constants/Colors'


interface InputProps {
  placeholder: string
  onTextChange: (text: string) => void
  touched?: ()=> void
  secure?: boolean
  value?: string
  touch?: boolean;
  error?: string;

}
const SIZE = 20 
const Default = ({ 
  placeholder, 
  onTextChange, 
  touched,   
  secure,
  value,
  touch,
  error,
  ...props
}: InputProps) => {

    const reColor = !touch ? 'text' : error ? 'red' : 'green'
  return (


      <View
        style={{
          backgroundColor: Colors.offWhite,
          borderRadius: 8,
          borderWidth: StyleSheet.hairlineWidth,
          borderColor: reColor,
          marginHorizontal:30,
          marginVertical:15,
          flexDirection:'row',
          justifyContent:'space-between',
          alignItems:'center'
        }}
      >
        <TextInput
          style={{ padding: 14 }}
          placeholder={placeholder}
          autoCapitalize="none"
          onChangeText={text => onTextChange(text)}
          onFocus={touched}
          value={value}
          secureTextEntry={secure}
         

        />
        {touch && (
				<Rounded 
				  name={!error ? 'check' : 'x'}
					size={SIZE}
					backgroundColor={!error ? 'green' : 'red'}
					color="white"
				/>

			)}
      </View>
    
  )
}

export default Default
