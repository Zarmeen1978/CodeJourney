
import { Image, StyleSheet, Text,View, Button } from "react-native";
import React from "react";
import {Link} from 'expo-router'

export default function App(){
  return (
    <View style={styles.container}>
      <Image   source={require('../app/assets/login.png')}/>
      <Text style={styles.heading}> <p>Learn Coding</p></Text>
      <Text style={styles.textSize}> <p>Learn with easy and fun.Just one
        application you will find many courses.</p> </Text>
      <Link href="/profile" style={styles.button}>
      Create a profile
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#ADD8E6',
  },
  textSize:{
    fontWeight:400,
    padding:14,
    fontSize:30,
  },
  heading:{
    fontSize:34,
    color:'#454545',
  },
  button:{
    color:'#454545',
    borderRadius:'20px',
     backgroundColor:'#e7e7e7',
      paddingTop:25,
      paddingBottom:25,
      paddingLeft:44,
      paddingRight:44,
      
    //  border: 'none',
    //  color: 'white',
    //  padding: 15px 32px;
    //  text-align: center;
    //  text-decoration: none;
    //  display: inline-block;
    //  font-size: 16px;
   
  }
 })





// import { StyleSheet, Text, View } from "react-native";
// import {Slot, Stack} from 'expo-router'

// const Index=()=>{
//   return (
//     <Stack>
//       <Stack.Screen name="index" 
//       options={{headerShown:false}}  />
//     </Stack>
//   )
// }
// export default Index

// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import {Link} from 'expo-router'
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//       <Link href="/profile" style={{color:'blue'}}>Go To The Profile Page</Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
