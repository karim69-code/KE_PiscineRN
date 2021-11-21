import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { useState } from 'react';


 const Counter = () => {
  const[count, setCount]=useState(0)
  const[count1, setCount1]=useState(0)
  const[count2, setCount2]=useState(0)
  const[count3,setCount3]=useState(0)
  return (
    <View style={styles.container}>
      <Text ><strong>Prix Panier 1: {count}</strong></Text>
      <Text ><strong>Prix Panier 2: {count1}</strong></Text>
      <Text ><strong>Prix Panier 3: {count2}</strong></Text>
     <Text ><strong>Prix Totale de Mon Panier:{count+count1+count2}</strong></Text>
      
      
      <Text ><strong>Nombre de chaise Berka choisie: {(count/119)}</strong></Text>
      <Text ><strong>Nombre de chaise Atlas choisie : {(count1/419)}</strong></Text>
      <Text ><strong>Nombre de chaise Linux choisie: {(count2/1419)}</strong></Text>
      <Text ><strong>Nombre Totale de Chaise que j'ai choisie: {(count2/1419)+(count1/419)+(count/119)}</strong></Text>
      
      <View style={styles.Button}>
          <Button title='Acheter chaise berka' onPress ={() => setCount(count +119 )}></Button>
          <View style={styles.Button1}>
          <Button title='Acheter chaise Atlas' onPress ={() => setCount1(count1 +419 )}></Button></View>
          <View style={styles.Button2}>
          <Button title='Acheter chaise Linux' onPress ={() => setCount2(count2 +1419 )}></Button></View>  
      </View>

     

     
      <View style={styles.ButtonR}>
          <Button title='Reset Pour le  Panier1' onPress ={() => setCount(0) }>
      </Button></View>
      <View style={styles.ButtonS}>
          <Button title='Reset Pour le Panier2' onPress ={() => setCount1(0) }>
      </Button></View>
      <View style={styles.ButtonT}>
          <Button title='Reset Pour le  Panier3' onPress ={() => setCount2(0) }>
      </Button></View>
      <StatusBar style="auto" />
      </View>
      )};
     
  


export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'hsla(50, 33%, 25%, .75);',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button:{
      width:'180px',
      height:'50px',
      backgroundColor:'yellow',
      justifyContent:'center',
      textAlign:'center',
      marginTop:'200px',
      marginleft:'20px',
  },

  Button1:{
    width:'180px',
    height:'50px',
    backgroundColor:'yellow',
    justifyContent:'center',
    textAlign:'center',
    marginTop:'90px',
    marginleft:'20px',
},
Button2:{
  width:'180px',
  height:'50px',
  backgroundColor:'green',
  justifyContent:'center',
  textAlign:'center',
  marginTop:'70px',
  marginleft:'20px',
},




  ButtonR:{
    textAlign:'center',
    marginTop:'-180px',
    width:'130px',
    height:'50px',
    justifyContent:'center',
    backgroundColor:'green',
    fontSize:'40px',
    marginLeft:'490px',
  },
  ButtonS:{
    textAlign:'center',
    marginTop:'80px',
    width:'130px',
    height:'50px',
    justifyContent:'center',
    backgroundColor:'green',
    fontSize:'40px',
    marginLeft:'490px',
  },
  ButtonT:{
    textAlign:'center',
    marginTop:'100px',
    width:'130px',
    height:'50px',
    justifyContent:'center',
    backgroundColor:'green',
    fontSize:'40px',
    marginLeft:'490px',
  },
  
  Texte:{
    textAlign:'center',
    marginTop:'30px',
    marginLeft:'240px',
    width:'100px',
    height:'50px',
    justifyContent:'center',
    backgroundColor:'blue',
    fontSize:'40px'
  },


});


// ligne de comande a utiliser sur le terminal pour utiliser counter.js=>     /c/xampp/htdocs/Compteurhautniveau/compteur1
//execution:expo start (bien verifier que //import Counter from './components/hello' sois bien commenter     )


// ligne de comande a utiliser sur le terminal si besoin d utiliser la partir hello.js    =>     /c/xampp/htdocs/Compteurhautniveau/compteur1
//execution:expo start ( bien verfier dans App.js que import Counter from './components/counter'sois bien commmenter et que import Counter from './components/hello' sois bien décommenter  )