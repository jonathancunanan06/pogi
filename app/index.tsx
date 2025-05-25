import { Text, View , StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  font:{
    color:'blue',
    fontSize:50,
    fontWeight:'bold',
    fontStyle:'italic',
  }
});

export default function Index() {
  return (
    <View style={[styles.container]}>
      <Text style={[styles.font]}>This is the index page and im trying to make a react native app</Text>
    </View>
  );
}
