/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './src/App'; // This file must exist!
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);