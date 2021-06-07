import React, { useEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Image, View, KeyboardAvoidingView } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { auth } from '../../firebase.config'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        navigation.replace('Home')
      }
    })

    return unsubscribe;
  }, [])

  const signIn = () => {

  }

  return (
    <KeyboardAvoidingView enabled style={styles.container}>
      <StatusBar style='light' />
      <Image
        source={{
          uri: 'https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png',
        }}
        style={{ width: 150, height: 150 }}
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
          onChangeText={(text) => setPassword(text)}
        ></Input>
      </View>
      <Button containerStyle={styles.button} onPress={signIn} title='Login'></Button>
      <Button containerStyle={styles.button} type='outline' title='Register' onPress={() => navigation.navigate('Register')}></Button>
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
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
    marginBottom: 5,
  }
})
