import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { SignupInitialValue, SignupValidationSchema, loginInitialValue, loginValidationSchema } from './utils'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'

const Signup = () => {
    const navigation = useNavigation();
    const handleSignup = () => {
        console.log("Hello")
    }
  return (
    <View style={{flex: 1 , alignItems: 'center', justifyContent:'space-between'}}>
        <View style={{flex:0.8 , justifyContent:'center' , alignItems: 'flex-start'}}>
        <Text style={{fontSize:20 , marginBottom : 13, fontWeight:'600' }}>Signup with your mobile number</Text>
        <Formik
        initialValues={SignupInitialValue}
        validationSchema={SignupValidationSchema}
        onSubmit={handleSignup}
        >
           {
            ({handleChange,
              handleBlur,
              handleSubmit,
              values,
              touched,
              errors,
              isValid  
            }) => {
                return (
                    <View>
                        <InputBox 
                        placeholder={'Mobile Number'}
                        onChangeText={handleChange('number')}
                        onBlur={handleBlur('number')}
                        value={values.number}
                        touched={touched.number}
                        errors={errors.number}
                        maxLength={10}
                        keyboardType={'numeric'}/>

                        <CustomButton buttonTitle={"SignUp"} onPress={handleSubmit} disabled={!isValid}/>
                    </View>
                )
            }
           } 
        </Formik>
        <TouchableOpacity style={{marginTop:20}}>
        <Text style={{fontSize: 18 , fontWeight:'500'}}>Signup with email</Text>
        </TouchableOpacity>
        </View>
        <View style={{flex:0.2 , marginBottom: 20, justifyContent: 'flex-end'}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={{fontSize: 20 , fontWeight:'500'}}>Login</Text>
          </TouchableOpacity>
        
        </View>
    </View>
  )
}

export default Signup