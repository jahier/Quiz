import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import ImagePath from '../assets/ImagePath'

const SocialButton = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <View style={{width:'30%'}}>
            <Image style={styles.socialLogo} source={props.socialLogo}/>
            </View>
            <View style={{width:'70%'}}>
            <Text style={styles.titleText}>{props.title}</Text>
            </View>
            </TouchableOpacity>
        </View>
    )
}
export default SocialButton
const styles = ScaledSheet.create({
    button: {
        width: '100%',
        height: 42,
        borderRadius: 0,
        alignSelf: 'center',
        backgroundColor: '#9DB2BF',justifyContent:'center',alignItems:'center',flexDirection:'row'
    },
    titleText: {
        fontWeight: '300',
        fontSize: 14, color: '#000000', lineHeight:19, textAlign: 'left'
    },
    socialLogo:{
        width:25,height:25,resizeMode:'contain',marginRight:10,alignSelf:'flex-end'
    },
})