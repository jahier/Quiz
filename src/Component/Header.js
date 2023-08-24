import { StyleSheet, View, TouchableOpacity, Image ,Text} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/AntDesign';
import ImagePath from '../assets/ImagePath';

const Header = ({leftBtn,rightText,onPress,tintColor}) => {
    return (
        <View style={styles.mainContent}>
            <TouchableOpacity onPress={onPress}>
                <Image style={{tintColor:tintColor,width: 20, height: 17, resizeMode: 'contain'}} source={leftBtn} />
                {/* <Icon name={leftBtn} size={30} color="white" />; */}
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={{fontSize:14,fontWeight:'500',lineHeight:17,color:'white'}}>{rightText}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Header

const styles = StyleSheet.create({
    mainContent: { width: '100%', alignItems: 'center', flexDirection: 'row',justifyContent:'space-between',paddingHorizontal:15,marginTop:15 },
})