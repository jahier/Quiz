import { FlatList, StyleSheet, Text, TouchableOpacity, View, RefreshControl } from 'react-native'
import React, { useEffect } from 'react'
import { faceData } from '..';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, fetchApiData } from '../slices/userSlice';
import { Image } from 'react-native-animatable';

export default function Demo(props) {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);
  const dispatch = useDispatch()
  const data = useSelector((state) => state.user.data)
  console.log('=====>>>---Data=====', data);
  useEffect(() => {
    dispatch(fetchApiData())
  }, [dispatch])
  const handleItemPress = (userId) => {
    const selectedUser = data.find((data) => data.id === userId);
    props.navigation.navigate("DataShow", { userData: selectedUser });
  };
  const selectRender = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => handleItemPress(item.id)} style={{ flex: 1, marginVertical: 15, borderBottomWidth: 1, borderColor: 'black', paddingVertical: 5 }}>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 22, color: 'black', fontWeight: '600' }}>{item.first_name}</Text>
          <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>{item.last_name}</Text>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>{item.email}</Text>
          <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>{item.id}</Text>
        </View>
        <Image style={{ width: '100%', height: 200, borderRadius: 15 }} source={{ uri: item.avatar }} />
      </TouchableOpacity>
    )
  }
  return (
    <View style={{ flex: 1, backgroundColor: '#FFFF' }}>
      <View>
        {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15, alignItems: 'center', marginTop: 50 }}>
        <Text style={{ fontSize: 16, color: 'skyblue', fontWeight: '600' }}>User Details</Text>
        <TouchableOpacity onPress={() => addUser()} style={{ width: 200, borderRadius: 15, justifyContent: 'center', alignItems: 'center', padding: 5, backgroundColor: 'blue' }}>
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '900' }}>Add User</Text>
        </TouchableOpacity>
      </View>
      <View style={{ margin: 15 }}>
        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgray', marginTop: 0, }}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '900' }}>Add User</Text>
          <Icon name="delete" color="red" size={20} />
        </View>
        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgray', marginTop: 0, }}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '900' }}>Add User</Text>
          <Icon name="delete" color="red" size={20} />
        </View>
        <View style={{ height: 1, width: '100%', backgroundColor: 'lightgray', marginTop: 0, }}></View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5 }}>
          <Text style={{ fontSize: 14, color: 'white', fontWeight: '900' }}>Add User</Text>
          <Icon name="delete" color="red" size={20} />
        </View>

      </View>
      <View style={{ height: 1, width: '100%', backgroundColor: 'white', marginTop: 0 }}></View> */}
      </View>
      <View style={{ paddingHorizontal: 15 }}>
        <FlatList
          //   numColumns={1}
          data={data}
          renderItem={selectRender}
          showsHorizontalScrollIndicator={false}

          refreshControl={
            <RefreshControl
             refreshing={refreshing}
              onRefresh={onRefresh}
              colors={['#ff0000', '#00ff00', '#0000ff']}
                progressBackgroundColor="#fffff"
             />
          }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})