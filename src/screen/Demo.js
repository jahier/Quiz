import { FlatList, StyleSheet, Text, TouchableOpacity, View, RefreshControl, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser, fetchApiData } from '../slices/userSlice';
import { Image } from 'react-native-animatable';
import Input from '../Component/Input';

export default function Demo(props) {
  const dispatch = useDispatch()
  const data = useSelector((state) => state.user.data)
  const [refreshing, setRefreshing] = React.useState(false);
  const [search, setSearch] = useState()
  console.log('=====>>>---SEARCh=====', search);

  useEffect(() => {
    dispatch(fetchApiData())
  }, [dispatch])
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);


  // const SEARCHDATA = data.filter((item) => item.first_name === search || item.email === search)
  const filteredData = data.filter(item => item.first_name.toLowerCase().includes(search));
  console.log('=====>>>---SEARCHDATA=====', filteredData);

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

      <View style={{ paddingHorizontal: 15, marginTop: 20 }}>
        <Text style={{ fontSize: 12, color: filteredData.length === 0 ? 'maroon' : 'black', fontWeight: '700', lineHeight: 13 }}>Search</Text>
        <TextInput
          style={{
            width: '100%', borderWidth: 1,
            borderColor: '#27374D', height: 40,
            paddingHorizontal: 15,
            color: filteredData.length === 0 ? 'maroon' : 'black',
            marginTop: 3, justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            fontSize: 14, fontWeight: '700',
            elevation: 15, shadowColor: 'darkblue',
          }}
          placeholder='Search'
          placeholderTextColor="gray"
          value={search}
          onChangeText={(text) => setSearch(text)}
        />
      </View>
      {filteredData.length === 0 ?
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
          <Text style={styles.notFound}>User Not Found</Text>
        </View>
        :
        <View style={{ paddingHorizontal: 15, flex: 1, marginTop: 10 }}>
          <FlatList
            //   numColumns={1}
            data={filteredData}
            renderItem={selectRender}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.id.toString()}
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={onRefresh}
                colors={['blue', 'pink', 'blue']}
                progressBackgroundColor="white"
              />
            }
          />
        </View>}

    </View>
  )
}

const styles = StyleSheet.create({
  Input: {
    width: '100%', borderWidth: 1,
    borderColor: '#27374D', height: 40,
    paddingHorizontal: 15, color: 'black',
    marginTop: 3, justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    fontSize: 14, fontWeight: '700',
    elevation: 15, shadowColor: 'darkblue'
  },
  label: { fontSize: 12, color: 'maroon', fontWeight: '700', lineHeight: 13 },
  notFound: { fontSize: 30, color: 'gray', fontWeight: '700', lineHeight: 31 },
})