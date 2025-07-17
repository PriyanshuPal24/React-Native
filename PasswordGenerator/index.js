/**
 * @format
 */


import { AppRegistry } from 'react-native';
import App from './App'; // 👈 This will point to App.tsx
import { name as appName } from './app.json'; // 👈 Pulls "PasswordGenerator"

AppRegistry.registerComponent(appName, () => App);