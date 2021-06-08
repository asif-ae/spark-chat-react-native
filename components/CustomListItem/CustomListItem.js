import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Avatar, ListItem } from 'react-native-elements'

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri:
            // chatMessages?.[0]?.photoURL ||
            `https://www.allthetests.com/quiz22/picture/pic_1171831236_1.png`,
        }}
      ></Avatar>
      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: '800' }}>
          Asif Estiak
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          This is a test subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})
