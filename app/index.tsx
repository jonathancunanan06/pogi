import { Text, View , StyleSheet, Button } from "react-native";
import {router} from "expo-router"

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
  }
});

export default function Index() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.font]}>Index Screen</Text>
      <Button title="Home" onPress={() => router.replace('/home')} />
    </View>
  );
}
