import { View, Text, Image } from "react-native";
import styles from "./style";


export default function About() {
return (
<View style={styles.container}>
<Image
source={{ uri: "" }}
style={styles.image}
/>
<Text style={styles.title}>About Us</Text>
<Text style={styles.text}>This Is the aBout Us Page</Text>
</View>
);
}