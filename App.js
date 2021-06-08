import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import { createStackNavigator } from '@react-navigation/stack';
import RegisterScreen from './screens/RegisterScreen/RegisterScreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

// Global Screen Options
const globalScreenOptions = {
  headerStyle: { backgroundColor: '#2C6BED' },
  headerTitleStyle: { color: 'white' },
  headerTintColor: 'white',
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Home"
        screenOptions={globalScreenOptions}>

        {/* Login Screen */}
        <Stack.Screen
          options={{
            title: `Login`,
          }}
          name='Login'
          component={LoginScreen}
        ></Stack.Screen>

        {/* Register Screen */}
        <Stack.Screen
          options={{
            title: `Register`,
          }}
          name='Register'
          component={RegisterScreen}
        ></Stack.Screen>

        {/* Home Screen */}
        <Stack.Screen
          name='Home'
          component={HomeScreen}
        ></Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
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
