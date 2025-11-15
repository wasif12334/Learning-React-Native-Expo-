import React from 'react';
import { View, Text, Button,StyleSheet } from 'react-native';

export default function FlexAppPractice() {


  return (
    <View style={style.MainContainer}>
      <View ><Text>Navbar</Text></View>
     
    </View> 
  );
}
const style=StyleSheet.create(
 {
    MainContainer:{
      flex:1,
      backgroundColor:"gray", 
      justifyContent:"center",
      alignItems:"center",
      flexDirection:"column",
      
      
       },
     
      
  }
)
