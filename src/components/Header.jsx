import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <View style={{paddingHorizontal:10, flexDirection: 'row', alignItems:'center', justifyContent:'space-between', height: 65 }}>
    <View>
    <Image style={{height: 29 , width:110}} source={require('../assets/Instagram.png')} /> 
    </View> 
    <View style = {{flexDirection: 'row'}}>
        <TouchableOpacity style={{marginRight: 15}}>
        <Image source={require('../assets/Like.png')}/>
        </TouchableOpacity>
        <TouchableOpacity>
        <View style={{position:'relative'}}>
        <Image source={require('../assets/Messanger.png')}/>
        <View style={{position:'absolute', left: 13, bottom: 12}}>
            <Text style={{backgroundColor:'red', borderRadius:50 , width:21 , height:21, fontWeight: '400', paddingHorizontal: 3 , paddingTop : 1}}> 5 </Text>
        </View>
        </View>
        </TouchableOpacity>
    </View>
       
    </View>
  )
}

export default Header