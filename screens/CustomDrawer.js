import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import * as SecureStore from 'expo-secure-store';
import UserContext from "../contexts/UserContext";
import useUserImage from "../components/useUserImage";
import { color } from 'react-native-reanimated';

const CustomDrawer = (props) => {
  const { user } = useContext(UserContext);
  const userImage = useUserImage(); 
  const [username, setUsername] = useState('');


  
  useState(() => {
    if (user && user.user) {
      setUsername(user.user.name);
    } else {
      setUsername('Guest');
    }
  }, [user]);

  const handleLogOut =async()=>{
    await SecureStore.deleteItemAsync('userToken');
    await SecureStore.deleteItemAsync('user');
    props.navigation.navigate('signin');
  }


  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ backgroundColor: '#fff',paddingHorizontal:10 }}>
        {/* Your Logo */}
        <Image source={require('../assets/images/crmboylogo.png')} style={{ height: 120, width: 120 }}resizeMode='contain' />
        {/* Search Bar */}
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#e6eefa', borderRadius: 5 }}>
          <Ionicons name="search" size={20} color="#878787" style={{ padding: 10 }} />
          <TextInput
            placeholder="Search"
            style={{ flex: 1, paddingVertical: 7 }}
            // Add necessary props and handlers for the search functionality
          />
        </View>
      </View>

      {/* Menu Heading */}
      <View style={{ backgroundColor: '#fff', padding: 10 }}>
        <Text style={{ color: '#000', fontSize: 17,fontWeight:'700' }}>Menu</Text>
      </View>

      {/* Menu Items */}
      <DrawerContentScrollView {...props} contentContainerStyle={{ backgroundColor: '#fff' }}>
        <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 5 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

    
      {/* Logout */}
      <View style={{ padding: 10, borderTopWidth: 2, borderTopColor: '#5865ff', flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ marginRight: 10 }}>
          {userImage ? (
            <Image
              source={{ uri: userImage }}
              style={{ height: 30, width: 30, borderRadius: 15 }}
            />
          ) : (
            <Image
              source={require("../assets/userProfile.png")} // Default profile image
              style={{ height: 30, width: 30, borderRadius: 15 }}
            />
          )}
        </View>
        <Text style={{ fontSize: 16,fontWeight:'700',color:'#333' }}>{username}</Text>
        {user ? (
          <TouchableOpacity onPress={handleLogOut} style={{ marginLeft: 'auto' }}>
            <Text style={styles.btn1}>LOGOUT <Ionicons name='chevron-forward-outline' size={16} color={'#fff'}/> </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => props.navigation.navigate('signin')} style={{ marginLeft: 'auto' }}>
            <Text style={styles.btn2}>LOGIN <Ionicons name='chevron-forward-outline' size={16} color={'#fff'}/> </Text>
          </TouchableOpacity>
        )}
        </View>  
      </View>
  );
}

const styles = StyleSheet.create({
  drawerItem: {
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  drawerItemText: {
    fontSize: 16,
    color: '#333',
  },
  btn1:{
    color:'red',
    fontWeight:'700'
  },
  btn2:{
    color:'green',
    fontWeight:'700'
  },

})

export default CustomDrawer;
