import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Login from './pantallas/login';
import Contacto from './pantallas/contactos';


import Registro from './pantallas/registro';
import MyDrawer from './pantallas/menu';
import Navigation from './navigation';


import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "@firebase/auth";
import { initializeApp } from '@firebase/app';
import { firebaseConfig } from './firebase-config';

export default function App() {
  return (

    <Navigation/>
    
  )



}

