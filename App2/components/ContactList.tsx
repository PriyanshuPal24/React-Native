import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ContactList() {
    const contacts=[
        {
            uid:1,
            uname:'Yuji Itadori',
            udetails:'He is the main charcter of series',
            imageUrl:'https://pm1.aminoapps.com/7918/bb3dfc9ae505e25e11237e58ccda96a9107e1912r1-1482-1424v2_00.jpg'
        },{
            uid:2,
            uname:'Satoru Gojo',
            udetails:'He is the teacher of Yuji and many more',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/9/96/SatoruGojomanga.png/250px-SatoruGojomanga.png'
        },{
            uid:3,
            uname:'Ryomen Sukuna',
            udetails:'Ryomen Sukuna is a fictional character and the main antagonist of the manga and anime series',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/9/94/Ryomen_Sukuna_%28character%29.jpg'
        },{
            uid:4,
            uname:'Yuji Itadori',
            udetails:'He is the main charcter of series',
            imageUrl:'https://pm1.aminoapps.com/7918/bb3dfc9ae505e25e11237e58ccda96a9107e1912r1-1482-1424v2_00.jpg'
        },{
            uid:5,
            uname:'Satoru Gojo',
            udetails:'He is the teacher of Yuji and many more',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/9/96/SatoruGojomanga.png/250px-SatoruGojomanga.png'
        },{
            uid:6,
            uname:'Ryomen Sukuna',
            udetails:'Ryomen Sukuna is a fictional character and the main antagonist of the manga and anime series',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/9/94/Ryomen_Sukuna_%28character%29.jpg'
        },{
            uid:7,
            uname:'Yuji Itadori',
            udetails:'He is the main charcter of series',
            imageUrl:'https://pm1.aminoapps.com/7918/bb3dfc9ae505e25e11237e58ccda96a9107e1912r1-1482-1424v2_00.jpg'
        },{
            uid:8,
            uname:'Satoru Gojo',
            udetails:'He is the teacher of Yuji and many more',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/thumb/9/96/SatoruGojomanga.png/250px-SatoruGojomanga.png'
        },{
            uid:9,
            uname:'Ryomen Sukuna',
            udetails:'Ryomen Sukuna is a fictional character and the main antagonist of the manga and anime series',
            imageUrl:'https://upload.wikimedia.org/wikipedia/en/9/94/Ryomen_Sukuna_%28character%29.jpg'
        }
    ];
  return (
    <View>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={styles.container} scrollEnabled={false}
      >
        {contacts.map(({uid,uname,udetails,imageUrl}) => (
             <View key={uid} style={styles.userCard}>
                <Image
                source={{
                    uri:imageUrl
                }}
                style={styles.userImage}
                ></Image>
                <View>
                    <Text style={styles.uname}>{uname}</Text>
                    <Text style={styles.udetails}>{udetails}</Text>
                </View>
             </View>
        ))}
      </ScrollView>
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
    container:{
        paddingHorizontal:10,
        paddingVertical:6,
    },
    userCard:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        marginBottom:10,
        borderRadius:10,
        padding:4,
        backgroundColor:'#95B9C7'
    },
    userImage:{
        height:60,
        width:60,
        borderRadius:60/2,
        marginRight:15
        
    },
    uname:{
        fontStyle:'italic',
        fontWeight:'900',
        color:'#000000'
    },
    udetails:{
    },

})