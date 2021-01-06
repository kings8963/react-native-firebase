import { StatusBar } from 'expo-status-bar';
import React from "react";
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";



import CreateUserScreen from "./screens/CreateUserScreen";
import UserDetailScreen from "./screens/UserDetailScreen";
import UsersList from "./screens/UsersList";

const Stack = createStackNavigator();

function Mystack(){
  return (
    <Stack.Navigator>
      <Stack.Screen name ="UsersList" component={UsersList}/>
      <Stack.Screen name = "CreateUserScreen" component={CreateUserScreen}/>
      <Stack.Screen name = "UserDetailScreen" component={UserDetailScreen}/>
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <Mystack/>
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
