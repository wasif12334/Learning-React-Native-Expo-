import { useState } from "react";
import { View, TextInput, Button } from "react-native";
import styles from "./style";


export default function Contact() {
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");


return (
<View style={styles.container}>
<TextInput
placeholder="Name"
style={styles.input}
value={name}
onChangeText={setName}
/>


<TextInput
placeholder="Email"
style={styles.input}
value={email}
onChangeText={setEmail}
/>


<TextInput
placeholder="Message"
style={[styles.input, { height: 120 }]}
multiline
value={message}
onChangeText={setMessage}
/>


<Button title="Submit" onPress={() => alert("Form submitted sycessfully")} />
</View>
);
}