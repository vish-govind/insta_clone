import { View, Text, Image, Dimensions, TextInput, TouchableOpacity} from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';


const StoryView = ({route}) => {
    console.log(route.params);
    const selectedItem = route.params.item
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const storyTime = currentHour - selectedItem.story.time
    const screenHeight = Dimensions.get('window').height
    const screenWidth = Dimensions.get('window').width
    const [isPressed , setIsPressed] = useState(false);
    const navigation = useNavigation();
    
    useEffect(() => {
      setTimeout(() => {
        navigation.goBack();
      }, 5000)
    },[])


  return (
    <View style={{flex:1 , backgroundColor:'black'}}>
        <View style={{
          flexDirection:'row', 
          paddingTop: 10 ,
           paddingLeft: 10 , 
           alignItems: 'center',
           position:'relative',
           zIndex:1}}>
        <Image style={{height:50, width:50, borderRadius:25 , marginRight: 10}} source={selectedItem.profile} />
        <Text style={{fontSize: 18 , fontWeight:'700', paddingRight: 10, color:'white' }}>{selectedItem.name}</Text>
        <Text style={{fontSize: 18 , fontWeight:'700',color:'white'}}>{storyTime}hr</Text>
        </View>
        <View style={{position:'absolute'}}>
          <Image style={{height:screenHeight - 100 ,width:screenWidth , borderBottomLeftRadius: 20 , borderBottomRightRadius: 20}} source={selectedItem.story.image}/>
          <View style={{flexDirection:'row' , marginTop: 11 , alignItems:'center'}}>
          <TextInput style={{borderWidth: 1 , borderColor: 'white', borderRadius:30 , marginHorizontal:15,  width: 300 , paddingHorizontal :15  }} 
          placeholder='Message'
          placeholderTextColor={'white'}/>
          <TouchableOpacity onPress={() => setIsPressed(true)}>
          <Image style={{tintColor: isPressed ? 'red' : 'white',  marginLeft: 5, marginRight:16}}source={require('../assets/Like.png')}/>
          </TouchableOpacity>
           <TouchableOpacity>
           <Image style={{tintColor:'white'}}source={require('../assets/Messanger.png')}/>
           </TouchableOpacity> 
        </View>
        </View> 
    </View>
  )
}

export default StoryView