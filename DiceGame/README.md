# 🎲 React Native Dice Roller App

A simple, interactive dice rolling app built with React Native. Tap the button to roll a dice and get a haptic feedback along with a dice image update.

---

## 🚀 Features

- 🎲 Displays dice faces from 1 to 6 using images
- 🔄 Random number generation on button tap
- 📳 Haptic feedback on dice roll (using react-native-haptic-feedback)
- 🌈 Simple and clean UI
- 🧊 Default state uses a Zero.png image (no roll yet)

---

## 🧑‍💻 Tech Stack

- ⚛️ React Native (CLI)
- 🎯 JavaScript / TypeScript
- 📱 Android/iOS Compatible

---

## 📸 Screenshots

| Home Screen | Result Screen |
|-------------|--------------------|
| ![Home Screen](./assets/Home%20Screen.png) | ![Result Screen](./assets/Result.png) |

---
## ▶️ Running the App

1. Clone the Repository
  
   git clone https://github.com/your-username/dice-roller-react-native.git
   
   cd dice-roller-react-native
2. Install Dependencies
   
   npm install
   
   or
   
   yarn install
   
3. Install Haptic Feedback Library
   npm install react-native-haptic-feedback

   For iOS (if not using Expo)
   
   cd ios && pod install && cd ..
---

## 🧠 How It Works
  -App starts with a Zero.png dice image.
- On tapping the "TAP ME" button:
  - A random number between 1 and 6 is generated.
  - The corresponding dice image (One.png, ..., Six.png) is shown.
  - Haptic feedback is triggered on supported devices.

---
## ✨ Customization
   - 🔁 Add more animations or sound effects.
   - 🖼 Change dice images with your own designs.
   - 🎨 Modify styles in StyleSheet.create().
---

## 📝 License
   - This project is open-source and available under the MIT License.
   - Made with ❤️ by Priyanshu Pal

---



