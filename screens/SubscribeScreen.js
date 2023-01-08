import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet, Pressable, Image, Alert} from 'react-native';

const SubscribeScreen = () => {
  const [email, onChangEmail] = useState(" ");

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../assets/little-lemon-logo-grey.png')}/>
      <Text style={styles.info}>
        Subscribe to our newsletter for our latest delicious recipes!
      </Text>
      <TextInput
        style={styles.inputBox}
        value={email}
        placeholder={"Email Address"}
        onChange={onChangEmail}
        keyboardType={'email-address'}
      />
      <Pressable onPress={()=> alert("Thanks for subscribing stay tuned")} style={styles.button}>
          <Text style={styles.buttonText}>Subscribe</Text>
      </Pressable>
    </View>
  )
}

export default SubscribeScreen;

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  image: {
    width: 250,
    height: 150,
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: 80,
    resizeMode: "contain",
  },
  info: {
    fontSize: 20,
    padding: 20,
    marginVertical: 20,
    color: 'black',
    textAlign: 'center',
  },
  logo:{
    flex: 0.5,
    height: 70,
    width: 70,
    resizeMode: "contain",
    borderRadius: 10,
    textAlign: 'center'
  },
  inputBox:{
    height: 40, 
    margin: 12, 
    borderWidth: 1, 
    borderRadius: 10,
    // marginVertical: 10,
    padding: 10, 
    fontSize: 16, 
    borderColor: 'EDEFEE', 
    backgroundColor: '#EDEFEE',
  },
  button: {
    fontSize: 22,
    padding: 10,
    // marginVertical: 150,
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