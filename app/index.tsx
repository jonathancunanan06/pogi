import { Text, View , Pressable } from "react-native";
import {router} from "expo-router"
import {indexstyles} from "./style"
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";

export default function Index() {
  return (
    <SafeAreaView style={[indexstyles.container]} >
      <View style={[indexstyles.container1]}>
        <Image source={require('../assets/images/pogiicon_nobg.png')} style={[indexstyles.logo]}></Image>
        <Text style={[indexstyles.descriptiontitle]}>JNTHN CNNN</Text>
        <Text style={[indexstyles.description]}>Welcome to my app ! I'm Jonathan Cunanan the creator. Have a great day.</Text>
        <Pressable style={[indexstyles.enter]} onPress={() => router.replace('/home')} > 
          <Text style={[indexstyles.entertext]}>ENTER</Text>
        </Pressable> 
      </View>
    </SafeAreaView>
  );
}
