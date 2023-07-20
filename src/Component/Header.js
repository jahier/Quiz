import { StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import ImagePath from '../assets/ImagePath';

const Header = ({ leftBtn, rightText, tintColor, navigation, title }) => {
    return (
        <View style={styles.mainContent}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image style={{ tintColor: tintColor, width: 25, height: 20, resizeMode: 'contain' }} source={leftBtn} />
                {/* <Icon name='rocket' size={30} color="#900" />; */}
            </TouchableOpacity>
            <View>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 22,
                    color: '#fff',
                }}>{title}</Text>
            </View>
            <TouchableOpacity>
                <Text style={{ fontSize: 14, fontWeight: '500', lineHeight: 17, color: 'black' }}>{rightText}</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Header

const styles = StyleSheet.create({
    mainContent: { width: '100%', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, marginTop: 15 },
})