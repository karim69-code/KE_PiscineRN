import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StyleSheet, Text, View , Image , TextInput , ScrollView, Button } from 'react-native';
import React from 'react';


export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.Top}>
      <Image style={{width:'100%', height: '100%'} }source={ require('./assets/itakademylogo.png')}
     />
      </View>
      <Text style={styles.Top1}>Welcome back</Text>
      <Text style={styles.Top2}>Tresor</Text>
      <Text style={styles.btn}>CONTINUE LEARNING</Text>
      <Text style={styles.btn3}>NEXT PISCINE</Text>
         <ScrollView horizontal={true}>
            <View style={styles.bloc1}>
                <View style={styles.mage}>
                   <Image style={{width: 50, height: 50} }source={ require('./assets/javascriptLogo.PNG')}/>
                </View>
                <Text style={styles.text1}><strong>JavaScript</strong></Text>
            </View>
            <View style={styles.bloc2}>
            <View style={styles.mage}>
            <Image style={{width: 40, height: 40 } }source={ require('./assets/react.PNG')}/>
            </View>
                <Text style={styles.text1}><strong>React.js</strong></Text>
            </View>
            <View style={styles.bloc3}>
            <View style={styles.mage}>
                   <Image style={{width: 50, height: 50} }source={ require('./assets/javascriptLogo.PNG')}/>
                </View>
                <Text style={styles.text1}><strong>JavaScript</strong></Text>
            </View>
          </ScrollView>
      <View style={styles.colgauche}>
      <Image style={{width:40, height: 40} }source={ require('./assets/react.PNG')}/> 
          <Text style={styles.btn1}><strong>React.js</strong></Text>
          <Text style={styles.btn2}>5 OF 12 SECTIONS</Text>
      </View>
      <View style={styles.coldroite}>
      <Image style={{width:40, height: 40} }source={ require('./assets/react.PNG')}/> 
      <Text style={styles.Text}>NEXT PISCINE</Text>     
      </View>
            <View style={styles.col1}>
            <Image style={{width:'100%', height: '100%'} }source={ require('./assets/captureJS2.PNG')}/>
            </View>
            <View style={styles.col2}>
            <Image style={{width:'100%', height: '100%'} }source={ require('./assets/abstractBg.JPEG')}/>
            </View>
           
           
      <View style={styles.col3}>
      <Image style={{width:'100%', height: '100%'} }source={ require('./assets/captureJS1.PNG')}/>
      </View>
      
    

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
    marginLeft: '141px',
    marginTop: '65px',
  },
  Top2:{
    position:'absolute',
    marginLeft: '141px',
    marginTop: '93px', 
  },
  Text:{
    fontWeight:'normal',
    padding:10,
    marginTop:20,
    fontSize:17
  },
  mage:{
    marginTop:'20px',
    marginLeft:'25px',
    justifyContent:'center'
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
    marginLeft:'26px',
    marginTop:'308px',
  },
  col1:{
    background:'(./assets/abstractBg.JPEG)',
    position:'absolute',
    width: '303px',
    height: '231px',
    marginLeft: '26px',
    marginTop: '363px',
    background: 'url(.jpg)',
    backgroundColor: '#C4C4C4',
    borderTopRightRadius:'18px',
    borderTopLeftRadius:'18px'
  },
  col2:{
    position:'absolute',
    width: '303px',
    height: '231px',
    marginLeft: '358px',
    marginTop: '364px',
    backgroundColor: '#C4C4C4',
    borderTopRightRadius:'22px',
    borderTopLeftRadius:'22px'    
  },
  col3:{
    position:'absolute',
    width: '303px',
    height: '231px',
    marginLeft: '30px',
    marginTop: '780px',
    backgroundColor: '#C4C4C4',
    borderTopRightRadius:'18px',
    borderTopLeftRadius:'18px'
  },
  btn1: {
    position:'absolute',
    marginLeft: '95px',
    marginTop: '10px',
  },
  text1: {
    position:'absolute',
    marginLeft: '90px',
    marginTop: '25px',
    justifyContent:'center',
    textAlign:'center'
  },

  btn2:{
    position:'absolute',
    marginLeft: '95px',
    marginTop: '30px',
  },
  btn3:{
    position:'absolute',
    marginLeft: '40px',
    marginTop: '750px'
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
  coldroite:{
    position:'absolute',
    width: '303px',
    height: '50px',
    marginLeft: '358px',
    marginTop: '594px',
    backgroundColor: '#ffffff',
    borderBottomRightRadius:'18px',
    borderBottomLeftRadius:'18px'
  },

});

