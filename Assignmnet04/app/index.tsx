import { Text, View } from "react-native";
import { Link} from "expo-router";


export default function Index() {
  return (
   <View style={{style.mainBox}}>
    <View style={{style.NavBar}}>
      <Link   href="">Home </Link >
      <Link   href=""> Servies</Link >
      <Link   href="">About US </Link >
      <Link   href="">Contact </Link >
    </View>
   </View>

  );
}
