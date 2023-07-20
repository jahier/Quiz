import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import { Image } from 'react-native-animatable'
import ImagePath from '../assets/ImagePath'
import Header from '../Component/Header'
import Slider from '@react-native-community/slider';

export default function Quiz_question_page() {
  const answer = [
    {
      id: '1',
      answer: 'Information Technology'

    },
    {
      id: '2',
      answer: 'History'
    },
    {
      id: '3',
      answer: 'Information Technology'
    },
    {
      id: '4',
      answer: 'Information Technology'
    }
  ]

  const [colorActive, setColorActive] = useState()

  const activeButton = (id) => {
    setColorActive(id)

  }
  const renderItem = ({ item }) => {

    return (
      <View>
        <TouchableOpacity style={{
          borderColor: colorActive === item.id ? 'skyblue' : '#C3C3C3',
          borderWidth: 1,
          height: 40,
          borderRadius: 10,
          flexDirection: 'row',
          paddingHorizontal: 10,
          alignItems: 'center',
          width: '100%',
          marginTop: 15,
          backgroundColor: colorActive === item.id ? '#9DB2BF' : '#FFF',
        }} onPress={() => activeButton(item.id)}>
          <TouchableOpacity style={{ borderColor: '#C8C6C6', borderWidth: 1, height: 25, width: 25, borderRadius: 50 }}>
            {colorActive == item.id ? (
              <Image style={{ height: 13, width: 13, resizeMode: 'contain', marginLeft: 5,marginTop:5, tintColor: '#fff', }} source={ImagePath.rightIcon} />
            ) : null}
          </TouchableOpacity>
          <Text style={{ marginLeft: 10, fontWeight: '500', color: colorActive === item.id ? '#fff' : '#000000', fontSize: 13 }}>{item.answer}</Text>
        </TouchableOpacity>


      </View>
    )
  }
  return (
    <View style={styles.main_container}>

      <Header
        leftBtn={ImagePath.Back_icon}
        title="App Development"
        tintColor={'#fff'}
      />


      <View style={styles.Progress_view}>
        <Text style={styles.progress_text}>7/12</Text>


        <Slider
          style={{ width: 320, height: 30, backgroundColor: '#F3F3F3', marginTop: 2, borderRadius: 10, alignSelf: 'center' }}
          minimumValue={0}
          maximumValue={10}
          minimumTrackTintColor="#FFF"
          maximumTrackTintColor="#9DB2BF"
        />


      </View>


      <View style={styles.time_show_box}>
        <View style={styles.time_show_inner_box}>
          <Text style={styles.Quiz_timing}>10 sec</Text>
        </View>

      </View>

      <View style={styles.question_view}>
        <View>
          <Text style={styles.question_number}>Q1.</Text>
        </View>
        <View style={styles.question_inner_box}>
          <Text style={styles.question}>Two angles are complementary, if the sum of
            their measures is?</Text>
        </View>
      </View>

      <View style={styles.answer_box}>

        <FlatList
          data={answer}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#27374D'
  },
  Header_view: {
    flexDirection: 'row',
    paddingHorizontal: 5,
    marginTop: 15,
    alignItems: 'center'
  },
  Back_icon: {
    height: 20,
    width: 30,
    resizeMode: 'contain'
  },
  heading_text: {
    fontWeight: '500',
    fontSize: 22,
    color: '#000000',
    marginLeft: 70
  },
  Progress_view: {
    width: '100%',
    marginTop: 46,
    paddingHorizontal: 30
  },
  progress_background: {
    width: '100%',
    backgroundColor: '#F3F3F3',
    height: 20,
    borderRadius: 20
  },
  progress_inner_view: {
    backgroundColor: '#9DB2BF',
    height: '100%',
    width: '40%',
    borderRadius: 20,
  },
  progress_text: {
    fontWeight: '600',
    color: '#fff'
  },
  time_show_box: {
    width: 130,
    height: 130,
    backgroundColor: '#fff',
    borderRadius: 100,
    marginTop: 40,
    padding: 16,
    alignSelf: 'center'
  },
  time_show_inner_box: {
    backgroundColor: '#27374D',
    width: '100%',
    height: '100%',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'

  },
  Quiz_timing: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16
  },
  question_view: {
    marginTop: 40,
    paddingHorizontal: 15,
    flexDirection: 'row'
  },
  question_number: {
    fontWeight: '800',
    color: '#fff',
    fontSize: 18,

  },
  question: {
    marginLeft: 10,
    color: '#fff',
    fontWeight: '500',
    fontSize: 16
  },
  question_inner_box: {
    width: '90%'
  },
  answer_box: {
    paddingHorizontal: 20,
    marginTop: 40,
    width: '100%'
  },

})