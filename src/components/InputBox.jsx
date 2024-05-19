import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const InputBox = ({
placeholder,
onChangeText,
onBlur,
value,
touched,
secureTextEntry,
keyboardType,
maxLength,
errors}) => {
  return (
    <View style={styles.mainContainer}> 
      <TextInput style={styles.TextInput}
      placeholder={placeholder}
      onChangeText={onChangeText}
      onBlur={onBlur}
      value={value}
      touched={touched}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      maxLength={maxLength}/>

      { errors && touched && <Text style={{color: 'red', paddingLeft : 5 }}>{errors}</Text>}
      
    </View>
  )
}

export default InputBox

const styles = StyleSheet.create({
    mainContainer : {
        height: 88,
    },
    TextInput: {
        borderWidth : 1,
        width : 350,
        borderColor : 'gray',
        borderRadius : 5 ,
        paddingHorizontal : 10
    }

})