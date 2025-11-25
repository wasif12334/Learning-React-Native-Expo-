import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView,FlatList} from 'react-native';
const DATA = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
  { id: '4', title: 'Item 4' },
];
export default function App() {
  return (
    
//    <ScrollView style={{ marginTop: 50 ,height:90,width:200}}>
//     <View style={{ padding: 20, backgroundColor: '#960000ff', margin: 20, borderBlockColor:'green' }}>
//     <Text>Item 1</Text>
//   </View>

//   <View style={{ padding: 20, backgroundColor: '#007a66ff', margin: 20 }}>
//     <Text>Item 2</Text>
//   </View>

//   <View style={{ padding: 20, backgroundColor: '#72ad13ff', margin: 20 }}>
//     <Text>Item 3</Text>
//   </View>

//   <View style={{ padding: 20, backgroundColor: '#640758ff', margin: 20 }}>
//     <Text>Item 4</Text>
//   </View>
//   <View style={{ padding: 20, backgroundColor: '#64070fff', margin: 20 }}>
//     <Text>Item 5</Text>
//   </View>
//   <View style={{ padding: 20, backgroundColor: '#0f6407ff', margin: 20 }}>
//     <Text>Item 6</Text>
//   </View>
// </ScrollView>
<FlatList
      data={DATA}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View
          style={{
            padding: 20,
            margin: 10,
            backgroundColor: '#f2f2f2',
            borderRadius: 10,
          }}
        >
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
}
