import React from "react";
import { View, Text } from "react-native";
import styles from "./style";

export default function App() {
  return (
    <View style={styles.container}>
      
     
      <View style={styles.header}>
        <Text style={styles.text}>Header</Text>
      </View>

      
      <View style={styles.content}>
        <View style={styles.box}><Text>Box 1</Text></View>
        <View style={styles.box}><Text>Box 2</Text></View>
        <View style={styles.box}><Text>Box 3</Text></View>
        <View style={styles.box}><Text>Box 4</Text></View>
        <View style={styles.box}><Text>Box 5</Text></View>
      </View>

      
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>

    </View>
  );
}
