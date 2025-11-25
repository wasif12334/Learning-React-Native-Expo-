import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { View } from 'react-native';

export default function FlexAppPractice() {


  return (
    <View style={style.container}>
   <Image source={require('../images/xyz.png')} style={style.Image}></Image></View>
  ); 
}
const style=StyleSheet.create(
 {
  container:{
   flex:1,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
  }
  ,

  Image:{
    height:200,
    width:200,
    borderRadius:20,
 
  }
      
  }
)
