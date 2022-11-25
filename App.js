import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/Home';
import IssLoctionScreen from './screens/IssLoction';
import MeteorScreen from './screens/MeteorScreen';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native/lib/typescript/src';

const Stack=createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="IssLocation" component={IssLoctionScreen}/>
        <Stack.Screen name="MeteorScreen" component={MeteorScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
