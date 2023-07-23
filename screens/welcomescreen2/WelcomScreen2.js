import React from 'react';
import {View, StyleSheet,Text, Image,useWindowDimensions, ScrollView,TouchableOpacity } from 'react-native';
import CRMSERVICES from "../../assets/images/CRMSERVICES.png";
import styles from "../../styles/style";
import Ionicons from "react-native-vector-icons/Ionicons";


const WelcomeScreen2 = (props) => {
    const {height} = useWindowDimensions();
    const onSkipPress =()=>{
        props.navigation.navigate('signin')
    };
    const onArrowPress = ()=>{
        props.navigation.navigate('welcomscreen3')
    };
    return (
        <View style={styles.container}>
            <View style={styles.skipBtnCont}>
             <TouchableOpacity style={[styles.skipBtn]} onPress={onSkipPress}>
                    <Text >Skip</Text>
                </TouchableOpacity>
                </View>
        <ScrollView showsHorizontalScrollIndicator={false}>  
        <View style={[styles.mt11]}>
            <View style={[styles.mt3,{justifyContent:'center',alignItems:'center'}]}>
            <Image source={CRMSERVICES} style={[styles.logo,{height: height*0.3}]} resizeMode="contain"/>
            </View>
            <Text style={[styles.headingMedium,styles.mt8,styles.plr3,]}>Comprehensive Cloud solutions Mastery</Text>
            <Text style={[styles.paragraph,styles.mt2,styles.plr3,]}>Optimizing Business Operations With Tailor-Made Zoho And Power Apps Cloud Solutions</Text>
            

            
        </View>
        </ScrollView>
        <View style={{alignItems:'flex-end'}}>
        <TouchableOpacity style={[styles.btn, styles.btnPrimary, styles.btnSquare70, styles.btnCircle]} onPress={onArrowPress}>
        <Text style={{backgroundColor:'#5865ff'}}><Ionicons name="arrow-forward-outline" size={30} color='#fff' /></Text>
        </TouchableOpacity>
        </View>
        </View>
    );
}



export default WelcomeScreen2;
