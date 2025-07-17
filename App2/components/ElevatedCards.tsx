import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal={true}style={styles.container}>
        <View style={[styles.card,styles.cardElevated1]}>
          <Text>People 1</Text>
        </View>
        <View style={[styles.card,styles.cardElevated2]}>
          <Text>People 2</Text>
        </View>
        <View style={[styles.card,styles.cardElevated1]}>
          <Text>People 3</Text>
        </View>
        <View style={[styles.card,styles.cardElevated2]}>
          <Text>People 4</Text>
        </View>
        <View style={[styles.card,styles.cardElevated1]}>
          <Text>People 5</Text>
        </View>
        <View style={[styles.card,styles.cardElevated2]}>
          <Text>People 6</Text>
        </View>
        <View style={[styles.card,styles.cardElevated1]}>
          <Text>People 7</Text>
        </View>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        color:'#000000',
        fontSize:30,
        fontWeight:'bold',
        paddingHorizontal: 8
    },
    container:{
      padding:10
    },
    card:{
      alignItems:'center',
      justifyContent:'center',
      borderRadius:15,
      width:120,
      height:120,
      margin:8
    },
    cardElevated1:{
      backgroundColor:'#f0fff0',
      shadowOpacity:.5,
      shadowRadius:2
    },
    cardElevated2:{
      backgroundColor:'#696969',
      // elevation:10
      shadowOpacity:.5,
      shadowRadius:2
    }
})