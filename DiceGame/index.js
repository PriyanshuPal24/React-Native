import { AppRegistry } from 'react-native';
import App from './src/App'; // 👈 This will point to App.tsx
import { name as appName } from './app.json'; // 👈 Pulls "ColorFlipper"

AppRegistry.registerComponent(appName, () => App);