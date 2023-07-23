import React from 'react';
import { View, StyleSheet, ScrollView, Image,Text } from 'react-native';

const CustomImageCrousel = ({ data }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {data.map((item, index) => {
        return (
          <View style={{borderRadius:5}}>
            <View style={{backgroundColor:'#fff', height:150, 
            justifyContent:'center'}}>
          <View key={index} style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
            <Text style={{marginTop:20,fontSize:15,fontWeight:'600',color:'#E42527'}}>{item.text2}</Text>
            <Text style={{fontSize:15,fontWeight:'600',color:'#089949'}}>{item.text}</Text>
          </View>
          </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 10,
    marginRight: 10,
    width:80,
    height:80,
    margin:10,
    justifyContent:'center',
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    aspectRatio: 1,
    
  },
});

export default CustomImageCrousel;
