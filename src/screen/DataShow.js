import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Feather';
import { useSelector } from 'react-redux';
import Drawer from 'react-native-drawer';

const MyDrawerContent = ({ closeDrawer }) => {
    return (
      <View style={styles.drawerContainer}>
        <TouchableOpacity style={styles.drawerItem} >
          <Text style={{color:'red'}}>Option 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={closeDrawer}>
          <Text>Option 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.drawerItem} onPress={closeDrawer}>
          <Text>Option 3</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default function DataShow(props) {

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
      setIsDrawerOpen(!isDrawerOpen);
    };
  
    const closeDrawer = () => {
      setIsDrawerOpen(false);
    };


    const dataShow = useState(props.route.params.userData)
    const DATA = useSelector((state) => state.user.data)
    console.log('props=====', JSON.stringify(dataShow));
    const selectRender = ({ item }) => {
        return (
            <TouchableOpacity style={{ flex: 1, flexDirection: 'row' }}>
                <View style={{ width: 100, height: 100, borderRadius: 50 }}>
                    <Image style={{ width: 100, height: 100, borderRadius: 50, resizeMode: 'contain' }} source={{ uri: item.avatar }} />
                </View>
                <View style={{ justifyContent: 'center', marginLeft: 10 }}>
                    <Text style={{ fontSize: 22, color: 'black', fontWeight: '600' }}>{item.first_name}</Text>
                    <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>{item.last_name}</Text>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>{item.email}</Text>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: '600' }}>{item.id}</Text>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <TouchableOpacity onPress={() => props.navigation.goBack('')}>
                    <Icon name="arrow-left" size={25} color="black" />
                </TouchableOpacity>
            </View>
            <View style={{ paddingHorizontal: 15, height: 115 }}>
                <FlatList
                    //   numColumns={1}
                    data={dataShow}
                    renderItem={selectRender}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.borderContent}></View>
            <Text style={{ fontSize: 22, color: 'black', fontWeight: '900' }}>{dataShow[0].first_name}</Text>

            <Drawer
      open={isDrawerOpen}
      onClose={closeDrawer}
      type="displace"
      content={<MyDrawerContent closeDrawer={closeDrawer} />}
      tapToClose
      openDrawerOffset={0.2}
      panCloseMask={0.2}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={toggleDrawer} style={styles.toggleButton}>
          <Text style={{ fontSize: 22, color: 'black', fontWeight: '900' }}>Toggle Drawer</Text>
        </TouchableOpacity>
        <Text style={styles.mainContentText}>Main Content Area</Text>
      </View>
    </Drawer>
        </View>
    )
}

const styles = StyleSheet.create({
    borderContent: {
        height: 0.2, width: '100%',
        borderWidth: 0.5, borderColor: 'gray',
        borderStyle: 'dotted'
    },



    container: {
        
        justifyContent: 'center',
        alignItems: 'center',
        height:30,backgroundColor:'red'
      },
      toggleButton: {
        position: 'absolute',
        top: 40,
        left: 20,
        padding: 10,
      },
      mainContentText: {
        fontSize: 20,
      },
      drawerContainer: {
        flex: 1,
        paddingTop: 10,
        backgroundColor: '#f0f0f0',
      },
      drawerItem: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      },
})