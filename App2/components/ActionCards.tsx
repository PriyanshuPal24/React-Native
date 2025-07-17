import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ActionCards() {
  function openWebsite(websiteLink: string){
    Linking .openURL(websiteLink);
  }
  return (
    <View>
      <Text style={styles.headingText}>Blog Cards</Text>
      <View style={[styles.card,styles.elevatedCard]}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Tap CLICK ME to BUY the following Item</Text>
        </View>
        <Image 
        source={{uri:
          'https://www.shutterstock.com/shutterstock/photos/2424124945/display_1500/stock-vector-bandung-february-sukuna-or-yuuji-is-a-character-in-the-anime-jujutsu-kaisen-2424124945.jpg'}}
          style={styles.image}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>Jujutsu Kaisen is a dark fantasy manga/anime series where sorcerers battle
             cursed spirits born from negative human emotions. The story centers on Yuji 
             Itadori, who becomes a vessel for the powerful curse Ryomen Sukuna. The series
             explores themes of sacrifice, loss, and the consequences of choices, with 
             memorable quotes highlighting the characters' struggles and moral dilemmas. </Text>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={()=>openWebsite('https://www.amazon.com/SEGA-Luminasta-Gyokusetsu-Fushiguro-Restriction/dp/B0CHK2L11X/ref=mp_s_a_1_10?crid=2OZVTCZYB0HRN&dib=eyJ2IjoiMSJ9.CUiMbSZuwJxaXEXBtThAIxMZTBwJIipJWt7ZeZAp4Wjz7RMRQQzX3cPtD6P-sQ6PSpXYIsY4HIOYbtltZ_Nr0zcWjZCIZup162eHDYNHQQI5h0Pe4aNOVZyDYAY8stOGby81_XoRh9HHNWUoA_JYgP89Pq5Br2aWSWfDhqJodQMjb5HZFcNCUl4WPZ5wiUL8MYrv3L3r4xU7ed5VxMnRZg.SEDjUq_DIxhlbpKy0bx9bJZhhVI3Z-ZAijaKuHcl0SA&dib_tag=se&keywords=jujutsu+kaisen+figure&qid=1751956611&sprefix=jujutsu%2Caps%2C1053&sr=8-10')}>
            <Text style={styles.socialLinks}>CLICK ME</Text>
            {/* <Image
              source={{
                uri:'https://cdn.pixabay.com/photo/2018/09/11/17/20/jaipur-3670085_1280.jpg'
              }}
              style={styles.image}
            /> */}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>openWebsite('https://www.instagram.com/priyanshu_pal_24?igsh=cWhibWVvaXdzajdk')}>
            <Text style={styles.socialLinks}>FOLLOW ME</Text>
            {/* <Image
              source={{
                uri:'https://cdn.pixabay.com/photo/2018/09/11/17/20/jaipur-3670085_1280.jpg'
              }}
              style={styles.image}
            /> */}
          </TouchableOpacity>
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
    height:450,
    width:'100%',
    borderRadius:7,
    marginVertical:5,
    marginHorizontal:15
  },
  elevatedCard:{
    backgroundColor:'#D6D85D',
    elevation:5,
    shadowOffset:{ height:1,width:1 },
    shadowColor:'#C0C9EE',
    shadowOpacity:0.5
  },
  headerContainer:{
    height:40,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  headerText:{
    color:'#000000',
    fontSize:16,
    fontWeight:'700'
  },
  image:{
    height:300
  },
  bodyContainer:{
    padding:8
  },
  footerContainer:{
    height:30,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly'

  },
  socialLinks:{
    fontSize:18,
    fontWeight:'800',
    fontStyle: 'italic',
    color:'#FFFFFF',
    backgroundColor:'#3674B5',
    paddingHorizontal:18,
    paddingVertical:1,
    borderRadius:10
  }

})