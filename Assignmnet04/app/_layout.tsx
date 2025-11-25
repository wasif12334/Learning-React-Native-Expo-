import { HeaderShownContext } from "@react-navigation/elements";
import { Stack } from "expo-router";
import React from "react";


const  RootLayout =()=> {
  return (
    
    <Stack>
      <Stack.Screen name="index"/>
      <Stack.Screen name="services"/>
      <Stack.Screen name="about"/>
      <Stack.Screen name="contact"/>
    </Stack>

  );
}
export default RootLayout;
