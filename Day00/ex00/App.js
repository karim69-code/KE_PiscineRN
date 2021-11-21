import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View , Image , TextInput , ScrollView, Button } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.onTop}>
      <Image style={{width:400, height: 220} }source={ require('./assets/basketo.png')}
     />
      </View>
      <StatusBar style="auto" />
      <View style={styles.btn}>
        <Text style={styles.adidas}>Adidas</Text>
        <Text style={styles.h2}>Yeezy Boost 350 V2 Black Red</Text>

        <View style={styles.Button}>
          <Text style={styles.LeftButton}>42                 340€</Text>
          <Text style={styles.RightButton}><Icon name="shopping-cart" size={30} color="white" />   BUY</Text>
        </View> 

        <Text style={styles.texte}>The <Text style={styles.change}>Yeezy 350 Boost V2 Bred</Text> stand out for its and simplicity. Unlike most V2 shoes 
          that feature a patterned print, this shoes has a monochrome black upper
          with red stitching. yeezy has a monochrome black upper with <Text style={styles.change}>red stitching</Text> that read 
          SPLY-350. The silhouette is set on a black boost sole semi-translucent.
        </Text>

        <View >
          <Text style={styles.changes}>SKU:CP9652</Text>
          <Text style={styles.changes}>Realase date: February 2017</Text>
          <Text style={styles.changes}>Colorway: CORE BLACK/CORE BLACK/RED</Text>
        </View>
      </View>
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D3D1CB',
    position:'relative',
    height:'100%',
    flex:1,
  },

  btn: {
    backgroundColor: '#ffffff',
    height:'70%',
    borderRadius: 30,
    padding:20
  },
  onTop:{
    height:'30%',
    justifyContent:'center',
    alignItems:'center'
  },
  adidas : {
    color:'#D3D1CB',
    fontWeight: 'bold',
    fontSize:17,
  },
  h2:{
    fontWeight: 'bold',
    fontSize: 18
  },
  Button:{
    flexDirection:'row',
    marginLeft: -5
  },
  LeftButton:{
    borderColor: '#D3D1CB',
    borderWidth : 2,
    height:60,
    width:170,
    borderStyle : 'solid',
    borderRadius: 20,
    padding:15,
    paddingLeft:15,
    marginTop:15
  },
  RightButton:{
    backgroundColor: 'black',
    borderWidth : 2,
    height:60,
    width:170,
    borderStyle : 'solid',
    borderRadius: 20,
    color: 'white',
    textAlign: 'center',
    marginLeft: 30,
    fontSize:25,
    padding:12,
    paddingLeft:15,
    marginTop:15,
  },
  texte:{
    fontWeight:'normal',
    padding:10,
    marginTop:20,
    fontSize:17
  },
 
  change:{
    fontWeight:'bold'
  },
  changes:{
    fontWeight:'bold',
    marginTop:5
  },

  
});

//commande terminal a utiliser 

//C:\Users\karim\Downloads\DAY08\Day00\ex00> npm start