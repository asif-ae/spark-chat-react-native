import React, { useLayoutEffect } from 'react'
import { View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import { Avatar } from 'react-native-elements'
import CustomListItem from '../../components/CustomListItem/CustomListItem'
import { auth } from '../../firebase.config'

const HomeScreen = ({ navigation }) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'SPARK',
      headerStyle: { backgroundColor: 'white' },
      headerTitleStyle: { color: 'black' },
      headerTintColor: 'black',
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }}/>
          </TouchableOpacity>
        </View>
      )
    })
  }, [])
  return (
    <SafeAreaView>
      {/* <StatusBar style='light' /> */}
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
