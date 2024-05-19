import { View, Text, Image , TouchableOpacity } from 'react-native'
import React from 'react'


const Profile_Details = () => {
  return (
    <View style={{paddingHorizontal: 15}}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
        <Image style={{height:80 , width: 80 , borderRadius:40}} source={require('../assets/Profile/img_1.jpg')}/>
      <View style={{width:75 , alignItems:'center'}}>
        <Text style={{fontSize: 28, fontWeight:'600', color:'black'}}>4</Text>
        <Text style={{fontSize:15 , fontWeight:'400', color:'black'}}>Posts</Text>
      </View>
      <View style={{width:75 , alignItems:'center'}}>
        <Text style={{fontSize: 28, fontWeight:'600', color:'black'}}>1.2M</Text>
        <Text style={{fontSize:15 , fontWeight:'400', fontWeight:'black'}}>Followers</Text>
      </View>
      <View style={{width:75 , alignItems:'center'}}>
        <Text style={{fontSize: 28, fontWeight:'600', color:'black'}}>1</Text>
        <Text style={{fontSize:15 , fontWeight:'400', fontWeight:'black'}}>Following</Text>
      </View>
      </View>
      <Text style={{fontSize:18 , color:'black', fontWeight:'600', marginTop: 13}}>VISHALI G</Text>
      <Text style={{color:'black'}}>What you sow so you reap !!!</Text>
      <Text style={{color:'black', fontWeight:'700', fontSize:18}}>See Translation</Text>
    <View style={{flexDirection:'row', marginTop: 15 , justifyContent:'space-between',marginHorizontal: 10}}>
    <TouchableOpacity>
        <Text style={{backgroundColor:'#E1E1E1', width: 150 ,fontWeight:'400' ,  paddingHorizontal:10 , paddingVertical: 5, borderRadius: 5, textAlign:'center', color:'black', fontSize: 17}}>Edit Profile</Text>
    </TouchableOpacity>
    <TouchableOpacity>
        <Text style={{backgroundColor:'#E1E1E1', width: 150 ,fontWeight:'400' ,  paddingHorizontal:10 , paddingVertical: 5, borderRadius: 5, textAlign:'center', color:'black', fontSize: 17}}>Share Profile</Text>
    </TouchableOpacity>
    </View>
    
    </View>
  )
}

export default Profile_Details