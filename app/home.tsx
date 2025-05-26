import {Text, View, StyleSheet, Pressable} from "react-native";
import {router} from "expo-router";

const styles = StyleSheet.create({
  container2:{
    flex: 9,
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
  },
  container1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'powderblue',
  },
  container:{
    flex:1,
  }

});

export default function Home() {
    return(
      <View style={[styles.container]}>
        <View style={[styles.container1]}>
          <Text style={[styles.font]}>HOME</Text>
        </View>
          <View style={[styles.container2]}>
              <Pressable style={[styles.button]} onPress={() => router.replace('/')}><Text style={[styles.title]}>INDEX</Text></Pressable>
          </View>
      </View>
    );
}