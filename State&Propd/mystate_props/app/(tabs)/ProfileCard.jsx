// Child (Greeting.js)
import React, { useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';

const Greeting = ({ initialName }) => {
  const [name, setName] = useState(initialName); // useState = state hook 

  return (
    <View style={{ alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 10 ,color:"white" }}>Hello, {name}!</Text>
      <TextInput 
        placeholder="Type new name"
        style={{
          borderColor: 'gray',
          borderWidth: 1,
          width: 200,
          padding: 8,
          marginBottom: 10,
          textAlign: 'center',
          color:"white",
        }}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <Button title="Reset to initial" onPress={() => setName(initialName)} />
    </View>
  );
};

export default Greeting;
