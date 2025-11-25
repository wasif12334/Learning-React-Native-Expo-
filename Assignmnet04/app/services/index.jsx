import { View, Text, Image, FlatList } from "react-native";
import styles from "./style";


const DATA = [
{ id: "1", title: "Service 1", img: "https://via.placeholder.com/200" },
{ id: "2", title: "Service 2", img: "https://via.placeholder.com/200" },
{ id: "3", title: "Service 3", img: "https://via.placeholder.com/200" },
];


export default function Services() {
return (
<FlatList
data={DATA}
keyExtractor={(item) => item.id}
contentContainerStyle={{ padding: 20 }}
renderItem={({ item }) => (
<View style={styles.box}>
<Image source={{ uri: item.img }} style={styles.image} />
<Text style={styles.title}>{item.title}</Text>
</View>
)}
/>
);
}