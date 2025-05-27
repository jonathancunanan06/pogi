import { StyleSheet } from "react-native";

export const indexstyles = StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container1:{
    width:'90%',
    height:'50%',
  },
  descriptiontitle:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:50,
  },
  description:{
    marginBottom:'auto',
  },
  enter:{
    marginTop:'auto',
    alignSelf:'flex-end',
    backgroundColor:'powderblue',
    padding:10,
  },
  entertext:{
     textAlign:'center',
  }
})

export const homestyles = StyleSheet.create({
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
})

export default {
  indexstyles,
  homestyles,
};
