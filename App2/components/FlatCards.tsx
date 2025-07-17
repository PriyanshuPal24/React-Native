import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>Flat Cards</Text>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardOne]}> 
          <Text>IN</Text>
        </View>
        <View style={[styles.card,styles.cardTwo]}> 
          <Text>D</Text>
        </View>
        <View style={[styles.card,styles.cardThree]}> 
          <Text>IA</Text>
        </View>
      </View>
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
      flex:1,
      flexDirection:'row'
    },
    card:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      height:120,
      width:120,
      borderRadius:20,
      margin:8
    },
    cardOne:{
      backgroundColor:'#ff8c00',
    },
    cardTwo:{
      backgroundColor:'#f8f8ff',
    },
    cardThree:{
      backgroundColor:'#008000',
    }
})