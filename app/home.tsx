import {Text, View, Pressable} from "react-native";
import {router} from "expo-router";
import {homestyles} from "./style"



export default function Home() {
    return(
      <View style={[homestyles.container]}>
        <View style={[homestyles.container1]}>
          <Text style={[homestyles.font]}>HOME</Text>
        </View>
          <View style={[homestyles.container2]}>
              <Pressable style={[homestyles.button]} onPress={() => router.replace('/')}>
                <Text style={[homestyles.title]}>
                  INDEX
                </Text>
              </Pressable>
          </View>
      </View>
    );
}