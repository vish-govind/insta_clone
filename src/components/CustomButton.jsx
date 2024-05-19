import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { AppColor } from '../utils/AppColors'

const CustomButton = ({buttonTitle , onPress, disabled}) => {
  return (
    <View>
        <TouchableOpacity onPress={onPress} disabled={disabled}>
            <View style={{width: 350, backgroundColor: disabled ? AppColor.DISABLE_BUTTON : AppColor.BUTTON , borderRadius: 5}}>
                <Text 
                style = {{color:'white', fontSize :22, paddingVertical:12, textAlign:'center' }}
                >{buttonTitle}</Text>
            </View>
        </TouchableOpacity>
      
    </View>
  )
}

export default CustomButton