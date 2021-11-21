import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View , Image , TextInput , ScrollView, Button } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.Top}></View>
      <View style={styles.Top1}></View>
      <View style={styles.Top2}></View>
      <View style={styles.btn}></View>
      <View style={styles.btn3}></View>
         <ScrollView horizontal={true}>
            <View style={styles.bloc1}></View>
            <View style={styles.bloc2}></View>
            <View style={styles.bloc3}></View>
      <View style={styles.colgauche}>
          <View style={styles.bouton1}></View>
          <View style={styles.bouton2}></View>
      
      </View>
   </ScrollView>
      <View style={styles.colonnedeDroit}></View>
            <View style={styles.colonne1}></View>
            <View style={styles.colonne2}></View>
            
      <View style={styles.colonne3}></View>
      
    

      <StatusBar style="auto" />
      
      </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    position:'absolute',
    height:'100%',
    width:'100%',
    flex:1, 
  },
  Top: {
    backgroundColor: '#FFFFFF',
    position:'absolute',
    height:'72px',
    width:'79px',
    borderRadius: '89px',
    marginTop:'47px',
    marginLeft:'40px',
    border:'1px solid #E5E5E5 ',
  }, 
  Top1: {
    position:'absolute',
    width:'180px',
    height: '11px',
    marginLeft: '141px',
    marginTop: '65px',
    backgroundColor: '#C4C4C4',
    borderRadius: '28px',
  },
  Top2:{
    position:'absolute',
    width: '81px',
    height: '11px',
    marginLeft: '141px',
    marginTop: '93px',
    backgroundColor: '#C4C4C4',
    borderRadius:'28px',
  },
  bloc1: {
    position:'absolute',
    width: '175px',
    height: '82px',
    marginLeft: '19px',
    marginTop: '182px',
    backgroundColor: '#FFFFFF',
    borderRadius:'9px',
    border:'1px solid grey',
  },
  bloc2:{
    position:'absolute',
    width: '175px',
    height: '82px',
    marginLeft: '214px',
    marginTop: '182px',
    backgroundColor: '#FFFFFF',
    borderRadius:'9px',
    border:'1px solid grey',
  },
  bloc3:{
    position:'absolute',
    width: '175px',
    height: '82px',
    marginLeft: '419px',
    marginTop: '181px',
    backgroundColor: '#FFFFFF',
    borderRadius:'9px',
    border:'1px solid grey',
  },

  btn:{
    position:'absolute',
    width:'81px',
    height:'11px',
    marginLeft:'26px',
    marginTop:'308px',
    backgroundColor:'#C4C4C4',
    borderRadius: '28px',
  },
  colonne1:{
    position:'absolute',
    width: '303px',
    height: '231px',
    marginLeft: '26px',
    marginTop: '363px',
    backgroundColor: '#C4C4C4',
    borderTopRightRadius:'18px',
    borderTopLeftRadius:'18px'
  },
  colonne2:{
position:'absolute',
    width: '303px',
    height: '231px',
    marginLeft: '358px',
    marginTop: '364px',
    backgroundColor: '#C4C4C4',
    borderTopRightRadius:'18px',
    borderTopLeftRadius:'18px'    
  },
  colonne3:{
    position:'absolute',
    width: '303px',
    height: '231px',
    marginLeft: '30px',
    marginTop: '780px',
    backgroundColor: '#C4C4C4',
    borderTopRightRadius:'18px',
    borderTopLeftRadius:'18px'
  },
  bouton1: {
    position:'absolute',
    width:'121px',
    height: '11px',
    marginLeft: '21px',
    marginTop: '12px',
    backgroundColor: '#C4C4C4',
    borderRadius: '28px',
  },
bouton2:{
    position:'absolute',
    width: '81px',
    height: '11px',
    marginLeft: '21px',
    marginTop: '32px',
    backgroundColor: '#C4C4C4',
    borderRadius:'28px',
  },
  btn3:{
    position:'absolute',
    width: '145px',
    height: '11px',
    marginLeft: '40px',
    marginTop: '750px',
    backgroundColor: '#C4C4C4',
    borderRadius:'28px',
  },
  colgauche:{
    position:'absolute',
    width: '303px',
    height: '50px',
    marginLeft: '26px',
    marginTop: '594px',
    backgroundColor: '#ffffff',
    borderBottomRightRadius:'18px',
    borderBottomLeftRadius:'18px'
  },
colonnedeDroit:{
    position:'absolute',
    width: '303px',
    height: '50px',
    marginLeft: '200px',
    marginTop: '594px',
    backgroundColor: '#ffffff',
    borderBottomRightRadius:'18px',
    borderBottomLeftRadius:'18px'
  },

});

