import { View, Text } from 'react-native'
import React from 'react'
import Profile_Header from '../../components/Profile_Header'
import Profile_Details from '../../components/Profile_Details'
import Profile_Post from '../../components/Profile_Post'

const UserProfile = () => {
  return (
    <View style={{flex:1 , backgroundColor:'white'}}>
      <Profile_Header />
      <Profile_Details />
      <Profile_Post />
    </View>
  )
}

export default UserProfile