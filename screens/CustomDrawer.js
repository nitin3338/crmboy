import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, TouchableOpacity, TextInput } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

const CustomDrawer = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
      <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#999797' }}>
        <TouchableOpacity onPress={() => props.navigation.navigate('signin')}>
          <Text>Logout</Text>
        </TouchableOpacity>
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
})

export default CustomDrawer;
