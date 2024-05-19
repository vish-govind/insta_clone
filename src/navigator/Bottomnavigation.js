import { View, Text , Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Dashboard from '../screens/Dashboard/Dashboard';
import Search from '../screens/Dashboard/Search';
import AddPost from '../screens/Dashboard/AddPost';
import Reel from '../screens/Dashboard/Reel';
import UserProfile from '../screens/Dashboard/UserProfile';


const Tab = createBottomTabNavigator();

const Bottomnavigation = () => {
  return (
   <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
    <Tab.Screen name='Home' component={Dashboard} options={{tabBarIcon: (focused) => (
        <Image style={{height : 24 , width: 24}}
        source={focused ? require('../assets/footer/sHomeButton.png') : require('../assets/footer/homeButton.png')}/>
    )}}/>
    <Tab.Screen name='Search' component={Search} options={{tabBarIcon: (focused) => (
        <Image style={{height : 24 , width: 24}}
        source={focused ? require('../assets/footer/sSearch.png') : require('../assets/footer/search.png')}/>
    )}}/>
    <Tab.Screen name='AddPost' component={AddPost} options={{tabBarIcon: () => (
        <Image style={{height : 24 , width: 24}}
        source={require('../assets/footer/addPost.png')}/>
    )}}/>
    <Tab.Screen name='Reel' component={Reel} options={{tabBarIcon: () => (
        <Image style={{height : 24 , width: 24}}
        source={require('../assets/footer/reel.png')}/>
    )}}/>
    <Tab.Screen name='User' component={UserProfile} options={{tabBarIcon: () => (
        <Image style={{height : 24 , width: 24}}
        source={require('../assets/footer/user.png')}/>
    )}}/>
   </Tab.Navigator>
  )
}

export default Bottomnavigation