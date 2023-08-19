import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/AntDesign';

const Button = (props) => {
    return (
        <View>
                <TouchableOpacity onPress={props.onPress} style={styles.button}>
                    <Text style={styles.titleText}>{props.title}</Text>
                    <View style={{marginLeft:10}}>
                    <Icon name={props.icon} size={20} color="white" />
                    </View>
                </TouchableOpacity>
        </View>
    )
}
export default Button
const styles = ScaledSheet.create({
    button: {
        width: '100%',
        height: 42,
        borderRadius: 0,
        alignSelf: 'center',
        backgroundColor: 'rgba(150,156,191,0.25)',
         justifyContent: 'center', alignItems: 'center',
         borderWidth:0.5,
         borderColor:'#FFFCFC',
         flexDirection:'row',
    },
    titleText: {
        fontWeight: '700',
        fontSize: 14, color: '#FFFFFF', lineHeight: 19, textAlign: 'center'
    },
})