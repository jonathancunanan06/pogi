import {Text, View, StyleSheet, Pressable} from "react-native";
import {router} from "expo-router";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  font:{
    color:'blue',
    fontSize:20,
    fontWeight:'bold',
    fontStyle:'italic',
    textAlign:'center',
  },
  button:{
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:'tomato',
    paddingVertical:25,
    paddingHorizontal:25,
    justifyContent:'center',
    elevation:20,
  },
  title:{
    color:'white',
    textAlign:'center'
  }
});

export default function Home() {
    return(
        <View style={[styles.container]}>
            <Text style={[styles.font]}>Home Screen</Text>
            <Pressable style={[styles.button]} onPress={() => router.replace('/')}><Text style={[styles.title]}>INDEX</Text></Pressable>
        </View>
    );
}