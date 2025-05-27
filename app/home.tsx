import { Text, View , Pressable, TextInput } from "react-native";
import {Link, router} from "expo-router"
import {homestyles} from "./style"
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useState } from "react";


export default function Home() {
  const [email,setemail]=useState('')
  const [password,setpass]=useState('')

  return (
    <SafeAreaView style={[homestyles.container]} >
      <View style={[homestyles.container1]}>
        <Image source={require('../assets/images/pogiicon_nobg.png')} style={[homestyles.logo]}></Image>
        <Text style={[homestyles.descriptiontitle]}>JNTHN CNNN</Text> 
      </View>

      <View style={[homestyles.logcon]}>
        <Text style={[homestyles.logtitle]}>
          LOGIN
        </Text>
        <TextInput style={[homestyles.textinput]}
          placeholder="email/username"
          value={email}
          onChangeText={(text) => setemail(text)}
          keyboardType="email-address"
        >
        </TextInput>
        <TextInput style={[homestyles.textinput]}
          placeholder="password"
          onChangeText={(text) => setpass(text)}
          value={password}
          secureTextEntry
        >
        </TextInput>
      
        <Pressable style={[homestyles.enter]} onPress={() => router.replace('/')} > 
          <Text style={[homestyles.entertext]}>LOGIN</Text>
        </Pressable>   

        <View style={[homestyles.signlink]}>
          <Text style={[homestyles.sign]}>
            First Time?
          </Text>
           <Link href={'/_sitemap'} style={[homestyles.sign]}>
            Sign Up
          </Link>
        </View>

      </View>
      <View style={[homestyles.empt]}></View>
    </SafeAreaView>
  );
}
