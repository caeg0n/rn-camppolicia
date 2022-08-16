import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/screens/Home';
import Register from './src/screens/Register';
import Qrcode from './src/screens/Qrcode';
import { Provider } from 'react-redux';
import { Store } from './src/redux/store';

//import globeVar from "./GlobalVar";
//global.URL_BASE = "http://192.168.7.14:3000";
//global.UUID = v4();

const Stack = createStackNavigator();
export default function App (){
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
