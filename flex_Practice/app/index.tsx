import { Text, View ,StyleSheet} from "react-native";

export default function Index() {
  return (
           <View style={[style.container1]}>
     <View style={{flex:1,flexDirection:"row",backgroundColor:"black",justifyContent:"space-evenly",alignItems:"center"}}>

    <Text style={{color:"white",fontSize:20 , flexWrap:"wrap"}}>Home </Text>
    <Text style={{color:"white",fontSize:20, flexWrap:"wrap" }}>Services </Text>
    <Text style={{color:"white",fontSize:20 , flexWrap:"wrap"}}>About Us </Text>
    <Text style={{color:"white",fontSize:20, flexWrap:"wrap" }}>Contact </Text>
     </View>
     <View style={
      {
        flex:6,
        backgroundColor:"green",  
        flexDirection:"column" , 
        justifyContent:"space-around" ,
        alignContent:"space-around"  ,
        gap:10
      }
     }>
      <View style={ { flex:2, backgroundColor:"blue", height:100,width:100}}>
      </View>
      <View style={ { flex:2, backgroundColor:"gray", }}></View>
      <View style={ { flex:3, backgroundColor:"white", }}></View>

     </View>
    
      <View style={
      {
        flex:1,
        backgroundColor:"pink",
          
      }
     }>

    <Text style={
      {
    color:"white",
    textAlign:"center",
    fontSize:50,
    height:100,
    alignItems:"center", 
    borderColor:"white",
    borderWidth:1,
    margin:1
  }
     }>Footer Section</Text>
     </View>
    
           
    </View>
    
    
  );
}

      const style=StyleSheet.create ({
  container1:{
    flex:1,
    backgroundColor:"lightblue",
    flexDirection:"column",
  
    padding:1,
    justifyContent:"flex-end",
    alignContent:"flex-start"
   },
  
 } )

