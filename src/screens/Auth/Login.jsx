import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import { loginInitialValue, loginValidationSchema } from './utils'
import InputBox from '../../components/InputBox'
import CustomButton from '../../components/CustomButton'
import { useNavigation } from '@react-navigation/native'
import Signup from './Signup'

const Login = () => {

    const navigation = useNavigation();

    const handleLogin = (values) => {
        console.log(values)
        navigation.navigate('Bottom')
    }
  return (
    <View style={{flex: 1 , alignItems: 'center', justifyContent:'space-between'}}>
        <View style={{flex:0.8 , justifyContent:'center' , alignItems: 'center'}}>
        <Image source={require('../../assets/Instagram.png')}/>
        <Formik
        initialValues={loginInitialValue}
        validationSchema={loginValidationSchema}
        onSubmit={handleLogin}
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
                        placeholder={'Username'}
                        onChangeText={handleChange('username')}
                        onBlur={handleBlur('username')}
                        value={values.username}
                        touched={touched.username}
                        errors={errors.username}/>

                         <InputBox 
                        placeholder={'Password'}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                        touched={touched.password}
                        errors={errors.password}
                        secureTextEntry={true}/>

                        <CustomButton buttonTitle={"Login"} onPress={handleSubmit} disabled={!isValid}/>
                    </View>
                )
            }
           } 
        </Formik>
        <TouchableOpacity style={{marginTop:20}}>
        <Text style={{fontSize: 18 , fontWeight:'500'}}>Forgot Password?</Text>
        </TouchableOpacity>
        </View>

        <View style={{flex:0.2 , marginBottom: 27, justifyContent: 'flex-end'}}>
          <TouchableOpacity onPress={() => navigation.navigate(Signup)}>
          <Text style={{fontSize: 20 , fontWeight:'500'}}>Create new account</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}

export default Login