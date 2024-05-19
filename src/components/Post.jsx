import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { UserData } from '../utils/UserData'

const Post = () => {
    const screenwidth = Dimensions.get('window').width;
  return (
    <View style={{marginTop: 6}}>
       {UserData.map(item => {
        return (
            <View style={{marginTop: 12}}>
                <View style={{flexDirection:'row', alignItems: 'center', marginBottom: 14}}>
                    <Image style={{height:30, width:30, borderRadius:15 , marginLeft:9 , marginRight: 9 }}source={item.profile} />
                    <Text style={{fontWeight:'700', fontSize: 16 , color: 'black'}}>{item.name}</Text>
                </View>
                <View>
                    <Image style={{height: 350 , width:screenwidth }}source={item.post.image}/>
                </View>
                <View style={{flexDirection:'row' , alignItems:'center', marginTop: 10 , paddingHorizontal:10}}>
                    <TouchableOpacity>
                        <Image style={{height:23 , width:26 }}source={require('../assets/Like.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{height:24 , width:24 , marginLeft: 13}}source={require('../assets/Comment.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image style={{height:23 , width:23 , marginLeft: 13}}source={require('../assets/Messanger.png')} />
                    </TouchableOpacity>
                </View>
                <Text style={{fontSize: 16 , fontWeight: 600 , color:'black' , paddingLeft: 13 , marginTop: 8}}>{item.post.like} likes</Text>
                <View style={{flexDirection:'row' , alignItems:'center', paddingLeft: 13}}>
                    <Text style={{color:'black' , fontSize:16 , fontWeight:'700' , paddingRight: 10}}>{item.name}</Text>
                    <Text style={{color:'black'}}>{item.post.caption}</Text>
                </View>
            
            
            </View>
        )
       })
       }
      
    </View>
  )
}

export default Post