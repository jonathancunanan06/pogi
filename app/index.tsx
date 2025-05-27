import { Text, View , Pressable } from "react-native";
import {router} from "expo-router"
import {indexstyles} from "./style"

export default function Index() {
  return (
    <View style={[indexstyles.container]}>
      <View style={[indexstyles.container1]}>
        <Text style={[indexstyles.descriptiontitle]}>JNTHN CNNN</Text>
        <Text style={[indexstyles.description]}>Welcome to our app ! I'm Jonathan Cunanan the creator. Have a greate day.</Text>
        <Pressable style={[indexstyles.enter]} onPress={() => router.replace('/home')} > 
          <Text style={[indexstyles.entertext]}>ENTER</Text>
        </Pressable> 
      </View>
    </View>
  );
}
