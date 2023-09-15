import { ImageBackground, StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImagePath from '../assets/ImagePath'
import LinearGradient from 'react-native-linear-gradient'
import Icon3 from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/AntDesign';
import { FlatList } from 'react-native';

export default function Congratulations(props) {
  // const [Data, setData] = useState(props.route.params.data)
  // console.log('props.route.params.data===========>>>>', Data);

  const Data = [
    { id: '1' }, { id: '2' }
  ]
  const renderItem = ({ item, index }) => {
    return (
      <View style={{ marginVertical: 10 }}>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ width: '25%', justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ width: 45, height: 45, borderRadius: 30, resizeMode: 'contain' }} source={ImagePath.myImage} />
          </View>
          <View style={{ width: '45%', justifyContent: 'center', marginLeft: 5 }}>
            <Text style={styles.userName}>Isha Gupta</Text>
            <View style={{ flexDirection: 'row',marginTop:3 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: 12, height: 12, borderRadius: 20, backgroundColor: 'green' }}></View>
                <View style={{ marginLeft: 5 }}>
                  <Text style={{ fontSize: 10, color: 'white', fontWeight: '600' }}>12</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 5 }}>
                <Image style={{ width: 12, height: 12, resizeMode: 'contain' }} source={require('../assets/image/coin.png')} />
                <View style={{ marginLeft: 5 }}>
                  <Text style={{ fontSize: 10, color: 'white', fontWeight: '600' }}>12</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={{ width: '30%', justifyContent: 'center', }}>
            <Text style={styles.resultText}>Winner</Text>
          </View>
        </View>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, }}>
      <ImageBackground style={{ flex: 1 }} source={ImagePath.homeBackground}>
        <Text style={styles.projectName}>LEARNO</Text>
        {/* <LinearGradient style={{ flex: 1, backgroundColor: 'rgba(138, 136, 144, 0.6)', marginTop: 40, borderTopRightRadius: 20, borderTopLeftRadius: 20 }}
          colors={[
            'rgba(47, 47, 49, 0.4)', 'rgba(47, 47, 49, 0.9)',
            // 'rgba(133, 132, 139, 0.9)', 'rgba(47, 47, 49, 0.7)','rgba(47, 47, 49, 0.9)'
          ]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        > */}
          <Text style={styles.Congratulations}>Congratulations!</Text>
          {/* <LinearGradient style={{ width: 200, backgroundColor: 'rgba(138, 136, 144, 0.6)', marginTop: 40, borderRadius: 10, paddingVertical: 8, paddingHorizontal: 10, alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            colors={[
              'rgba(47, 47, 49, 0.4)', 'rgba(47, 47, 49, 0.9)',
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <View style={{ marginRight: 7 }}>
              <Icon3 name="star" size={20} color="rgba(210, 161, 5, 0.99)" />
            </View>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: '700', textAlign: 'center' }}>YOU WON</Text>
            <View style={{ marginLeft: 7 }}>
              <Icon3 name="star" size={20} color="rgba(210, 161, 5, 0.99)" />
            </View>
          </LinearGradient> */}
          <View style={{ paddingHorizontal: 15 }}>
            <LinearGradient style={{ width: '100%', backgroundColor: 'rgba(138, 136, 144, 0.6)', marginTop: 40, borderRadius: 10, paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
              colors={[
                'rgba(47, 47, 49, 0.4)', 'rgba(47, 47, 49, 0.9)',
              ]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
            >
              <FlatList
                showsVerticalScrollIndicator={false}
                data={Data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
              />
            </LinearGradient>
          </View>
          <TouchableOpacity onPress={()=>props.navigation.navigate('BottomTab')}>
          <LinearGradient style={{ width: 80, backgroundColor: 'rgba(138, 136, 144, 0.6)', marginTop: 40, borderRadius: 20, paddingVertical: 5, paddingHorizontal: 10, alignSelf: 'center', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
            colors={[
              'rgba(220, 218, 212, 0.3)', 'rgba(220, 218, 212, 0.3)',
            ]}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
           
            <Text style={{ color: 'white', fontSize: 14, fontWeight: '700', textAlign: 'center' }}>Menu</Text>
          </LinearGradient>
          </TouchableOpacity>
        {/* </LinearGradient> */}
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  projectName: {
    color: 'white', fontSize: 40, fontWeight: 'bold', textAlign: 'center', marginTop: 20
  },
  Congratulations: {
    color: 'rgba(250, 196, 3, 0.99)', fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20
  },
  resultText: {
    color: 'rgba(210, 161, 5, 0.99)', fontSize: 12, fontWeight: 'bold', textAlign: 'center',

  },
  userName: {
    fontSize: 12, color: 'white', fontWeight: '600'
  },
})