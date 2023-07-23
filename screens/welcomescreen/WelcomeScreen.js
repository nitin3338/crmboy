import React from 'react';
import {View, StyleSheet,Text, Image,useWindowDimensions, ScrollView,TouchableOpacity } from 'react-native';
import Logo_2 from "../../assets/images/Logo_2.png";
import styles from "../../styles/style";
import Ionicons from "react-native-vector-icons/Ionicons";


const WelcomeScreen = (props) => {
    const {height} = useWindowDimensions();

    const onSkipPress =()=>{
        props.navigation.navigate('signin')
    };
    
    const onArrowPress = ()=>{
        props.navigation.navigate('welcomscreen2')
    };
    return (
        <View style={styles.container}>
            <View style={styles.skipBtnCont}>
             <TouchableOpacity style={styles.skipBtn} onPress={onSkipPress}>
                    <Text>Skip</Text>
                </TouchableOpacity>
            </View>
        <ScrollView showsHorizontalScrollIndicator={false}>  
        <View style={[styles.mt3]}>
            <View style={[styles.mt10,{justifyContent:'center',alignItems:'center'}]}>
            <Image source={Logo_2} style={[styles.logo,{height: height*0.2}]} resizeMode="contain"/>
            </View>
            <Text style={[styles.headingMedium,styles.centered,styles.mt11]}>WELCOME</Text>
            <Text style={[styles.paragraph,styles.mt3,styles.plr3,{color:'#b8b6b6',textAlign:'center'}]}> Streamlining Your Business With Powered Cloud Solutions</Text>
            

            
        </View>
        </ScrollView>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <TouchableOpacity style={[styles.btnCont,{width:'20%',borderRadius:70}]} onPress={onArrowPress}>
        <Text style={{backgroundColor:'#5865ff'}}><Ionicons name="arrow-forward-outline" size={30} color='#fff' /></Text>
        </TouchableOpacity>
        </View>
        </View>
    );
}



export default WelcomeScreen;
