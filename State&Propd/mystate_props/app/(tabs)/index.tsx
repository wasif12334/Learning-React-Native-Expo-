import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Signup = () => {
  const [name, setName] = useState("");
  const [cnic, setCnic] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");

  const signup = () => {
    if (!name || !cnic || !email || !password || !address) {
      Alert.alert("Missing Information", "Please fill out every field.");
      return;
    }

    Alert.alert(
      "Account Created",
      `Name: ${name}\nCNIC: ${cnic}\nEmail: ${email}\nAddress: ${address}`
    );
  };

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.title}>Sign Up</Text>
        <View style={styles.underline} />
      </View>

      <View style={styles.formBox}>
        <TextInput
          style={styles.input}
          placeholder="Full Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="CNIC"
          placeholderTextColor="#888"
          keyboardType="numeric"
          value={cnic}
          onChangeText={setCnic}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={[styles.input, { marginBottom: 25 }]}
          placeholder="Address"
          placeholderTextColor="#888"
          value={address}
          onChangeText={setAddress}
        />

        <TouchableOpacity style={styles.button} onPress={signup}>
          <Text style={styles.buttonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f0f1f6",
  },
  header: {
    alignItems: "center",
    marginTop: 60,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#2E2E2E",
  },
  underline: {
    width: 60,
    height: 4,
    backgroundColor: "#FF5252",
    marginTop: 6,
    borderRadius: 2,
  },
  formBox: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 25,
    elevation: 5,
  },
  input: {
    borderBottomWidth: 1.2,
    borderColor: "#d1d1d1",
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 5,
    marginVertical: 8,
    color: "#333",
  },
  button: {
    backgroundColor: "#FF5252",
    borderRadius: 8,
    paddingVertical: 14,
    alignItems: "center",
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default Signup;