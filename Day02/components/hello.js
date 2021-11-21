import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { useState } from 'react';


const Counter = () => {//j utilise une constante qui prend deux parametre compteur et fonction
    const[count, setCount]=useState(null)
    return (
        <View>
        <Text ><strong>Hello: {count}</strong></Text>
        <Button title='karim' onPress ={() => setCount('karim')} ></Button>
        <Button title='charmarke' onPress ={() => setCount('charmarke')} ></Button>
        <Button title='tresor' onPress ={() => setCount('tresor')} ></Button>
        <Button title='burak' onPress ={() => setCount('burak')} ></Button>
        <Button title='Lena' onPress ={() => setCount('Lena')} ></Button>
        <StatusBar style="auto" />
        </View>
)};

export default Counter;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'brown',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Button:{
        width:'180px',
        height:'50px',
        backgroundColor:'red',
        justifyContent:'center',
        textAlign:'center',
        marginTop:'20px'
    },
    ButtonR:{
      textAlign:'center',
      marginTop:'20px',
      width:'100px',
      height:'50px',
      justifyContent:'center',
      backgroundColor:'red',
      fontSize:'40px'
    },
  
  });
  //execution de counter.js ou hello.js en commentant ou decommentant import dans App ligne 4 ou ligne 5 en fonction du resultat souhaiter