import { View, Text, TouchableOpacity,Image, FlatList } from 'react-native'
import React, { useState } from 'react'
import { profile_data, typeData  } from '../utils/UserData'

const Profile_Post = () => {
    const [selected , setSelected] = useState(1);

const renderItem = item => {
    return (
        <View>
            <Image style={{height: 130.9, width: 130.9}} source={item.item.image}/>
        </View>
    )
}

  return (
    <View style={{marginTop:20}}> 
    <View style={{flexDirection:'row' , justifyContent:'space-between'}}>
    {
        typeData.map(item => {
            return(
                <View key={item.id} style={{width: 196.36 , paddingBottom: 15 , borderBottomWidth: selected === item.id ? 1 : 0}}>
                    <TouchableOpacity onPress={() => setSelected(item.id)}>
                        <Image style={{tintColor:'black', marginLeft: 80}}source={item.image} />
                    </TouchableOpacity>
                </View>
            )
        })
    }
    </View>
      {selected == 1 && (
        <FlatList 
        data={profile_data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={3}
        showsHorizontalScrollIndicator={false}/>
      )}
      
    </View>
  )
}

export default Profile_Post