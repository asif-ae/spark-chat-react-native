import React, { useLayoutEffect, useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { View } from 'react-native'
import { Input, Button, Text } from 'react-native-elements'
import { auth } from '../../firebase.config'

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Back'
    })
  }, [navigation]);

  // Register
  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .than((authUser) => {
        authUser.user.update({
          displayName: name,
          photoURL: imageUrl || 'https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png',
        });
      })
      .catch((error) => {
        console.log(error.message)
      });
  }

  return (
    <KeyboardAvoidingView enabled style={styles.container}>
      <StatusBar style='light'></StatusBar>
      <Text h3 style={{ marginBottom: 50 }}>Create an account</Text>

      <View style={styles.inputContainer}>

        <Input
          placeholder='Full Name'
          autoFocus
          type='text'
          value={name}
          onChangeText={(text) => setName(text)}
        ></Input>

        <Input
          placeholder='Email'
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

        <Input
          placeholder='Profile Picture URL (Optional)'
          type='text'
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        ></Input>

      </View>

      <Button containerStyle={styles.button} raised onPress={register} title='Register'></Button>

    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

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
  },
})
