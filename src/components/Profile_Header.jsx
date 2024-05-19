import { View, Text, TouchableOpacity, Image , Modal } from 'react-native'
import React, { useState } from 'react'

const Profile_Header = () => {

  const [Open , setOpen] = useState(false)

  const handleModal = () => {
    setOpen(!Open)
  }

  return (
    <View style={{paddingHorizontal: 15 , paddingTop: 10 , height: 55 }}>
      <View style={{flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{fontSize: 24 , fontWeight:'600', color:'black'}}>Vishali Govindarajan</Text>
        <View style={{flexDirection:'row', alignItems:'center'}}>
            <TouchableOpacity>
            <Image style={{height:24 , width:24, marginRight: 15 }}source={require('../assets/footer/addPost.png')} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleModal}>
            <Image style={{height:20 , width:20 , tintColor:'black'}}source={require('../assets/Icon/Menu.png')}/>
            </TouchableOpacity>
        </View>
      </View>
      <Modal animationType='slide'
      transparent={true}
      visible={Open}
      onRequestClose={()=>{setOpen(!Open)}}>
        <View style={{flex: 1 , justifyContent: 'flex-end'}}>
          <View style={{backgroundColor: 'white', height: 520 , borderTopEndRadius: 25 , borderTopStartRadius:25}}>
            <TouchableOpacity>
             <Image style={{alignSelf:'center'}} source={require('../assets/Icon/Modalclose.png')}/>
             <View style={{paddingHorizontal:15}}>
             <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Setting and privacy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Your activity
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Archive
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>Saved</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    SuperVision
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Meta Varified
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Close Friends
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{borderBottomWidth: 1}}>
                  <Text style={{fontSize: 18, paddingVertical: 15}}>
                    Favourites
                  </Text>
                </TouchableOpacity>
             </View>
            </TouchableOpacity>

          </View>
        </View>

      </Modal>
    </View>
  )
}

export default Profile_Header