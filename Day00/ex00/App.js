import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Button,TextInput,ScrollView,ImageBackground } from 'react-native';




export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.PremierBlockGris}>
      <Image  style={styles.LaBasket} source={require('./assets/imagebasket.png')}/>
    </View>

      
      <View style={styles.BlockBlancENdessous}>
        
        <Text style={styles.Marques}>Adidas</Text>
        <Text style={styles.Réferencemarques}>Yeezy Boost 350 V2 Black Red</Text>
        
        <View style={styles.LeBlockMesDeuxBoutons}>
        <Text style={styles.BoutonTaillesetPrix}>
          <Text>42</Text>
          <Text>340$</Text>
          </Text>
        <Text style={styles.BoutonsAchats}>
        <Text>BUY</Text>
        </Text>
      
       </View>
      
      
      
      
      
      
       <View style={styles.BloquedeTexte}>
         
         The<strong>Yeezy 350 Boost V2 Bred</strong>
         stands out for its sobriety and simplicity.Unike most V2
         shoes that feature a patterned print,this shoe has a monochrome
         black upper with red stitching.Yeezy has a monochrome
         black upper with
         <strong>red stitching</strong>
         that reads SPLY-350.The silhouette is set
         on a black boost sale semi-translucent.
         </View>

           <View>
             <Text style={styles.PremierLigneFin}>SKU:CP9652</Text>
             <Text style={styles.SecondeLigneFin}>Release date:February 2017</Text>
             <Text style={styles.troisiemeLigneFin}>Colorway:CORE BLACK/CORE BLACK/RED</Text>
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

  PremierBlockGris:
        {
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        width:'400',
        height:'400',
        backgroundColor:'grey',
        paddingRight:'0.5rem',
         margin:'0.5rem'},
  
  LaBasket:
        {width:'420px',
        height:'235px'},
  
  BlockBlancENdessous:
  {position:'relative'
  ,display:'flex',
  justifyContent:'center',
  width:'400',
  height:'600',
  backgroundColor:'white',
  borderTopLeftRadius:'20',
  borderTopRightRadius:'20',
  padding:'20',
  marginTop:'-35',
  border:'1 solide red',
 },
  
  Marques:
  {position:'relative',
  display:'flex',
  justifyContent:'center',
  width:'400',
  height:'500',
  backgroundColor:'grey',
  paddingTop:'100',
  paddingRight:'25'},

  Réferencemarques:
  {position:'relative',
  display:'flex',
  justifyContent:'center',
  width:'400',
  height:'500',
  backgroundColor:'',
  paddingTop:'100',
  paddingRight:'25'},

  LeBlockMesDeuxBoutons:
  {
  display:'flex',
  flexDirection:'row',
  justifyContent:'space-between'
  },

  BoutonTaillesetPrix:
  {
  display:'flex',
  justifyContent:'space-between',
  width:'160',
  fontsize:'15',
  backgroundColor:'red',
  padding:'0.5rem',
  border:'3 solid red',
  paddingTop:'12',
  paddingBottom:'12',
  BorderRadius:'5'},

  BoutonsAchats:
  {
  display:'flex',
  justifyContent:'center',
  width:'160',
  padding:'20',
  fontSize:'15',
  border:'2px solid black',
  backgroundColor:'black',
  paddingTop:'12',
  paddingBottom:'12',
  borderRadius:'5',
color:'white',},

  BloquedeTexte:
  {fontsize:'20',
  display:'flex',
  flexDirection:'row',
  paddingTop:'20',
  paddingBottom:'60',
  },

  PremierLigneFin:
  {fontsize:'20',
  fontWheigt:'700',
  color:'black',
  paddingTop:'7',
  paddingRight:'7'},

  SecondeLigneFin:
  {fontsize:'20',
  fontWheigt:'700',
  color:'black',
  paddingTop:'7',
  paddingRight:'7'},

  troisiemeLigneFin:
  {fontsize:'20',
  fontWheigt:'700',
  color:'black',
  paddingTop:'7',
  paddingRight:'7'},



});
//je cree mon dossier avec git clone KE_PISCINERN
//je me place dessus et je CREER MON DOSSIER DAY00 DANS MON DOSSIER INITIAL
//ensuite je fais un npm install expo-cli --global
//ensuite un expo init ex00 SA CREERA LE FICHIER ex00 dans Day00(utiliser uniquement sur  le git bash)
//ensuite je me place sur ex00 et  je fais LE expo start (ou npm start si sa fonctionne pas) qui me creera les modules 
// a l'interieur du fichier ex00
//se mettre en blank template et managed default

