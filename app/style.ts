import { StyleSheet } from "react-native";

export const indexstyles = StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor:'#AAABBC'
  },
  container1:{
    width:'90%',
    height:'100%',
    alignItems:'center',
  },
  descriptiontitle:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:10,
    color:'#373F47',
    letterSpacing:10,
  },
  description:{
    color:'#373F47',
    marginBottom:'auto',
    fontSize:12,
    fontStyle:'italic',
    width:'80%'
  },
  enter:{
    marginTop:'auto',
    marginBottom:'auto',
    alignSelf:'center',
    width:'50%',
    padding:10, 
    borderColor:'white',
    borderWidth:1,
    borderRadius:5,
  },
  entertext:{
     textAlign:'center',
     fontSize:16,
     color:'white',
     letterSpacing:12,
  },
  logo:{
    width:150,
    height:150,
    marginTop:'auto',
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
