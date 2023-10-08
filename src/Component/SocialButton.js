import { StyleSheet, Text, View, TouchableOpacity ,Image} from 'react-native'
import React from 'react'
import { ScaledSheet } from 'react-native-size-matters'
import ImagePath from '../assets/ImagePath'
import Icon from 'react-native-vector-icons/Feather';

const SocialButton = (props) => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <View style={{width:'30%'}}>
            <Image style={[styles.socialLogo,{tintColor:props.tintColor}]} source={props.socialLogo}/>
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
       justifyContent:'center',
       alignItems:'center',
       flexDirection:'row',
       borderWidth:0.5,
       borderColor:'#FFFCFC',
       backgroundColor:'rgba(160,156,191,0.25)'
    },
    titleText: {
        fontWeight: '700',
        fontSize: 14, color: '#FFFFFF', lineHeight:19, textAlign: 'left'
    },
    socialLogo:{
        width:25,height:25,resizeMode:'contain',marginRight:10,alignSelf:'flex-end'
    },
})