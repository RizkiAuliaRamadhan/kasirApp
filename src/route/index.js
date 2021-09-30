import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home, Transaksi, Barang, Riwayat, Admin } from '../pages';


const Stack = createNativeStackNavigator();

function Route() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Transaksi" component={Transaksi} options={{headerShown: false}} />
        <Stack.Screen name="Barang" component={Barang} options={{headerShown: false}} />
        <Stack.Screen name="Riwayat" component={Riwayat} options={{headerShown: false}} />
        <Stack.Screen name="Admin" component={Admin} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;