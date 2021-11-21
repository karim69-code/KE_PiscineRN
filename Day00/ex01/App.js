import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image , TextInput , ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function App() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Image style={{width:400, height: 220} }source={ require('./assets/Loginlaunch.png')}
      />
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
});
