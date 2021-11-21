import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image , TextInput , ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Lachouette}>
      <Image style={styles.LoginLaunch} source={ require('./assets/Loginlaunch.png')}/>
      <View style={styles.formulaire}>
      <View style={styles.textemail}>Email </View>
      <View style={styles.textpassword}>Password </View>
      <View style={styles.textlogin}>Login</View>
      
      
      </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LoginLaunch:{
    width: '80%',
    height: '40%',
    marginLeft: '2em',
    marginTop: '2em',
    justifyContent: 'center'
  },Lachouette: {
    backgroundColor:'#ffffff',
    width:'80%',
    height:'85%',
    borderRadius: 20
  },
  formulaire: {
    backgroundColor:'#FFFFFF',
    width:'90%',
    height:'50%',
    borderRadius: 10,
    marginLeft: '1em',
    marginTop: '1em',
  },
  textemail: {
    backgroundColor:'#ffff',
    width:'80%',
    height:'20%',
    borderRadius: 10,
    marginLeft: '1em',
    marginTop: '1em',
    textAlign:'center',
    border:'2px solid #CACACA',
    justifyContent:'center'
  },
  textpassword: {
    backgroundColor:'#ffff',
    border:'2px solid #CACACA',
    width:'80%',
    height:'20%',
    borderRadius: 10,
    marginLeft: '1em',
    marginTop: '10px',
    textAlign:'center',
    justifyContent:'center'
  },
  textlogin: {
    backgroundColor:'#FF865C',
    width:'80%',
    height:'20%',
    borderRadius: 10,
    marginLeft: '1em',
    marginTop: '4em',
    textAlign:'center',
    justifyContent:'center'
  },
});
