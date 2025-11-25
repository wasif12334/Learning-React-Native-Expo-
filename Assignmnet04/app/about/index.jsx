import { View, Text, Image } from "react-native";
import styles from "./style";


export default function About() {
return (
<View style={styles.container}>
<Image
source={{ uri: "https://via.placeholder.com/250" }}
style={styles.image}
/>
<Text style={styles.title}>About Us</Text>
<Text style={styles.text}>We are a demo Expo app using multiple screens.</Text>
</View>
);
}