import { StyleSheet, TextInput } from "react-native";

export const indexstyles = StyleSheet.create({
    container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor:'#AAABBC'
  },
  container1:{
    width:'100%',
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
    width:'80%',
    textAlign:'justify',
  },
  enter:{
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
    width:200,
    height:200,
    marginTop:'auto',
  }
})

export const homestyles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    backgroundColor:'#AAABBC'
  },
  container1:{
    marginTop:'auto',
    alignItems:'center',
    justifyContent:'flex-start',
    flexDirection:'row-reverse',
    width:'90%',
    marginBottom:'auto',
  },
  descriptiontitle:{
    fontSize:16,
    fontWeight:'bold',
    color:'#373F47',
    letterSpacing:4,
  },
  enter:{
    width:'80%',
    padding:18, 
    borderColor:'white',
    borderWidth:1,
    margin:8,
  },
  entertext:{
     textAlign:'center',
     fontSize:16,
     color:'white',
     letterSpacing:12,
  },
  logo:{
    width:100,
    height:100,
  },
  logcon:{
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    marginBottom:'auto',
  },
  textinput:{
    fontSize:12,
    textAlign:'left',
    borderColor:'white',
    borderWidth:1,
    width:'80%',
    margin:8,
    padding:18,
  },
  logtitle:{
    color:'white',
    fontSize:25,
    marginBottom:10,
    letterSpacing:12,
    textAlign:'left',
    width:'80%'
  },
  empt:{
    margin:'auto'
  },
  signlink:{
    flexDirection:'row',
    marginTop:20,
  },
  sign:{
    margin:10,
    color:'#373F47'
  }
})

export default {
  indexstyles,
  homestyles,
};
