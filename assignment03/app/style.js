import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 50,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    height: 50,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    bottom: 0,
    left: 0,
    right: 0,
  },
  content: {
    marginBottom: 60,
    
  },
  box: {
    height: 100,
    backgroundColor: "lightgray",
    margin: 10,
    
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
  },
});

export default styles;
