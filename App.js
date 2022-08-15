import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { v4 } from 'uuid';

import Home from './src/screens/Home';
import Register from './src/screens/Register';
import Qrcode from './src/screens/Qrcode';

import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

const Stack = createStackNavigator();
export default function App (){
  global.URL_BASE = "http://192.168.7.14:3000";
  global.UUID = v4();
  return(
    <Provider store = { Store }>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home}></Stack.Screen>
        <Stack.Screen name="Register" component={Register}></Stack.Screen>
        <Stack.Screen name="Qrcode" component={Qrcode}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  )
}
