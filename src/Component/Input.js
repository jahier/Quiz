import { StyleSheet, Text, View ,TextInput} from 'react-native'
import React from 'react'

const Input=({placeholder,label,value,onChangeText,keyboardType})=> {
  return (
    <View>
 <Text style={styles.label}>{label}</Text>
    <TextInput style={styles.Input}
     placeholder={placeholder}
      placeholderTextColor="gray"
       value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
         />
    </View>
  )
}
export default Input

const styles = StyleSheet.create({
    Input:{width:'100%',borderWidth:1,borderColor:'#E0E0E0',height:35,paddingHorizontal:20,color:'black',marginTop:5},
    label:{fontSize:12,color:'black',fontWeight:'500',lineHeight:20},
})