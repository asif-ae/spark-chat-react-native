import React from 'react'
import { ScrollView, StyleSheet, SafeAreaView } from 'react-native'
import CustomListItem from '../../components/CustomListItem/CustomListItem'

const HomeScreen = () => {
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
