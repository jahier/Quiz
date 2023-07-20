import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'

const Button = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
                <Text style={styles.titleText}>{props.title}</Text>
            </TouchableOpacity>

        </View>
    )
}
export default Button
const styles = ScaledSheet.create({
    button: {
        width: '100%',
        height: 42,
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: '#526D82',justifyContent:'center',alignItems:'center'
    },
    titleText: {
        fontWeight: '500',
        fontSize: 16, color: '#FFFFFF', lineHeight:19, textAlign: 'center'
    },
})