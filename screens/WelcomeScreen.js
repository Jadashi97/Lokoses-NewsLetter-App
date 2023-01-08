import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/little-lemon-logo.png')}/>
      <Text style={styles.info}>
        Welcome to The Natana Restaurant, We are here to serve you!
      </Text>
      <Pressable onPress={()=> navigation.navigate('Subscribe')} style={styles.button}>
        <Text style={styles.buttonText}>News Letter</Text>
      </Pressable>
    </View>
  )
}

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 80,
    resizeMode: "contain",
  },
  logo:{
    flex: 1,
    height: 70,
    width: 70,
    resizeMode: "contain",
    borderRadius: 10,
    textAlign: 'center'
  },
  info: {
    fontSize: 20,
    padding: 20,
    marginVertical: 20,
    textAlign: 'center',
  },
  button: {
    fontSize: 16,
    padding: 8,
    marginVertical: 30,
    margin: 10,
    backgroundColor: '#EE9972',
    borderColor: '#EE9972',
    borderWidth: 2,
    borderRadius: 15,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
  },
})