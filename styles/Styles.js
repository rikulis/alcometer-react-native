import { Pressable, StyleSheet } from "react-native";


export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'space-evenly',
        margin: 15
    },
    textInput:{
        padding: 5,
        borderWidth:1,
        marginBottom: 10,
        width:200,
        borderColor:'blue',
    },
    label:{
        fontSize: 18,
        fontWeight: "bold"
    },
    result:{
        color: 'darkblue',
        fontSize: 25,
        fontWeight: "bold"
    },
    radioText:{
        color: 'darkblue',
        fontSize: 15
    },
    SpecialStyles: {
        backgroundColor:"#7842f5",
        color:"white"
    },
    press: {
       backgroundColor:"blue",
       width:100,
       height:30,
       borderRadius:5, 
       alignItems:"center",
       marginVertical:10
    },
    pressteksti: {
        backgroundColor:"blue",
        color:"white",
        fontSize:20,
       
    },
    header: {
       fontWeight:"bold",
        fontSize:40,
       color:"#03b1fc"
    }
});
  