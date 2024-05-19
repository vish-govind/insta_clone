import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { UserData } from '../utils/UserData'
import { useNavigation } from '@react-navigation/native'




const Stories = () => {
    const navigation = useNavigation();
  return (
    <View style={{flexDirection:'row', marginTop: 5}}>
    {
        UserData.map((item) => {
            console.log(item);
            return(
                <View style={{paddingRight: 10}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Story',{item})}>
                    <View style={{borderWidth: 3, borderRadius: 40, padding: 2}}>
                    <Image style={{height:70 , width:70 , borderRadius:35}}source={item.story.image} />
                    </View>
                    </TouchableOpacity>
                    <Text style={{textAlign: 'center'}}>{item.name}</Text>
                </View>
                
            )})
    }
    </View>
  )
}

export default Stories