import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FancyCards() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card,styles.cardElevated]}>
        <Image
        source={{
          uri:'https://cdn.pixabay.com/photo/2018/09/11/17/20/jaipur-3670085_1280.jpg'
        }}
        style={styles.cardImage}
        />
        <View style={styles.cardBody}> 
          <Text style={styles.cardLabel}>Hawa Mahal</Text>
          <Text style={styles.cardLocation}>Pink City, Jaipur </Text>
          <Text style={styles.cardDescription}>Hawa Mahal, also known as the "Palace of 
            Winds", is a stunning five-story palace located in Jaipur, Rajasthan, India.
            Built in 1799 by Maharaja Sawai Pratap Singh, it features 953 small windows
            (jharokhas) designed to allow royal women to observe street life without being
            seen. Crafted from red and pink sandstone, it’s a masterpiece of Rajput 
            architecture and a symbol of Jaipur’s rich cultural heritage.</Text>
          <Text style={styles.cardFotter}>1 Hour Away</Text>
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
    paddingHorizontal: 8,
  },
  card:{
    height:420,
    width:'100%',
    borderRadius:10,
    marginHorizontal:12,
    marginVertical:16
  },
  cardElevated:{
    backgroundColor:'#bdc3c7',
    elevation:5,
    shadowOffset:{
      height:1,
      width:1
    }
  },
  cardImage:{
    height:200,
    width:'100%',
    marginBottom:10,
    borderTopLeftRadius:6,
    borderTopRightRadius:6

  },
  cardBody:{},
  cardLabel:{
    color: '#000000',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardDescription:{
    color: '#555',
    fontSize: 14,
    marginBottom: 6,
  },
  cardLocation:{
    color: '#333',
    fontSize: 16,
    marginBottom: 4,
  },
  cardFotter:{
    color: '#007BFF',
    fontSize: 12,
    fontStyle: 'italic',
  }
})