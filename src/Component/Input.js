import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'

const Input = ({ placeholder, label, value, onChangeText, keyboardType,onFocus }) => {
  return (
    <View>
    <View style={{flexDirection:'row'}}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.star}>*</Text>

    </View>
      <TextInput style={styles.Input}
        placeholder={placeholder}
        placeholderTextColor="#E0E0E0"
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        onFocus={onFocus}
      />
    </View>
  )
}
export default Input

const styles = StyleSheet.create({
  Input: {
    width: '100%', borderWidth: 1,
    borderColor: '#E0E0E0', height: 40,
    paddingHorizontal: 15, color: 'White',
    marginTop: 3, justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'rgba(160,156,191,0.25)',
    fontSize:14,fontWeight:'700'
  },
  label: { fontSize: 12, color: '#FFFFFF', fontWeight: '700', lineHeight: 13 },
  star:{ fontSize: 16, color: 'white', fontWeight: '700', lineHeight: 16 },
})