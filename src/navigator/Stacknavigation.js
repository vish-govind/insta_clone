import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import Login from '../screens/Auth/Login'
import Signup from '../screens/Auth/Signup'
import Dashboard from '../screens/Dashboard/Dashboard'
import StoryView from '../components/StoryView'
import Bottomnavigation from './Bottomnavigation'

const stack = createNativeStackNavigator()

const Stacknavigation = () => {
  return (
   <NavigationContainer>
    <stack.Navigator screenOptions={{headerShown:false}}>
        <stack.Screen name='Login' component={Login}/>
        <stack.Screen name='Signup' component={Signup}/>
        <stack.Screen name='Home' component={Dashboard}/>
        <stack.Screen name='Story' component={StoryView}/>
        <stack.Screen name='Bottom' component={Bottomnavigation}/>
    </stack.Navigator>
   </NavigationContainer>
  )
}

export default Stacknavigation