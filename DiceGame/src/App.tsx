import React, {useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import DiceOne from '../assets/One.png';
import DiceTwo from '../assets/Two.png';
import DiceThree from '../assets/Three.png';
import DiceFour from '../assets/Four.png';
import DiceFive from '../assets/Five.png';
import DiceSix from '../assets/Six.png';
import Zero from '../assets/Zero.png';

import ReactNativeHapticFeedback from "react-native-haptic-feedback";

// Optional configuration
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

type DiceProps=PropsWithChildren<{
  imageUrl: ImageSourcePropType
}>

const Dice=({imageUrl}:DiceProps):JSX.Element=>{
  return(
    <View>
      <Image style={styles.diceImage} source={imageUrl} />
    </View>
  );
}

function App():JSX.Element {
  const[diceImage,setDiceImage]=useState<ImageSourcePropType>(Zero)

  const rollDiceonTap=()=>{
    let randomNumber=Math.floor(Math.random()*6)+1;

    switch(randomNumber){
      case 1: 
        setDiceImage(DiceOne)
        break;
      case 2:
        setDiceImage(DiceTwo)
        break;
      case 3: 
        setDiceImage(DiceThree)
        break;
      case 4:
        setDiceImage(DiceFour)
        break;
      case 5: 
        setDiceImage(DiceFive)
        break;
      case 6:
        setDiceImage(DiceSix)
        break;
      default: 
        setDiceImage(Zero)
        break;

    }
    ReactNativeHapticFeedback.trigger("impactHeavy", options);
    console.log("Haptic Triggered");
  }

  return (
    <View style={styles.container}>
      <Dice imageUrl={diceImage}/>
      <Pressable onPress={rollDiceonTap}>
        <Text style={styles.rollDiceBtnText}>
          TAP ME
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF2F2',
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#E5E0FF',
    fontSize: 16,
    color: '#8EA7E9',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});

export default App;