import * as React from 'react';

import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

import EditScreenInfo from '../components/EditScreenInfo';
import FieldImage from '../assets/images/field.jpg'

export default function TabOneScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground resizeMode='contain' source={FieldImage} style={styles.field}>

      </ImageBackground>
    
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  field:{
    width:"100%",
    aspectRatio: 2/3
  }
  
});
