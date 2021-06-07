import React, { useState } from 'react'
import { StatusBar } from 'react-native'
import { StyleSheet, Image, View, KeyboardAvoidingView } from 'react-native'
import { Input, Button } from 'react-native-elements'

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = () => {

  }

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={{
          uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder='Email'
          autoFocus
          type='email'
          value={email}
          onChangeText={(text) => setEmail(text)}
        ></Input>
        <Input
          placeholder='Password'
          secureTextEntry
          type='password'
          value={password}
          onChangeText={(text) => setEmail(text)}
        ></Input>
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title='Login'></Button>
      <Button containerStyle={styles.button} type='outline' title='Register'></Button>
      {/* <View style={{ height: 100 }}></View> */}
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  }
})
