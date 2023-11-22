import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Registro from "./registro";


const Stack = createStackNavigator();

export default function Login() {
  return (
    
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("./../assets/logo.png")}
      />
      <Text style={styles.titulo}>Login</Text>
      <Text style={styles.subTitulo}>Inicia Sesión</Text>
      <TextInput
        placeholder='Email'
        style={styles.textInput}
        id="email"
      />
      <TextInput
      placeholder='Contraseña'
      style={styles.textInput}
      id="contra"
      secureTextEntry // Agrega esta línea para ocultar la contraseña
      />

      <Text style={styles.olvideContra}>Olvidé la Contraseña</Text>

      <Button  title="Iniciar sesión"/>

      <Text style={styles.registrate}>¿No tienes una cuenta? <Button  title="Regístrate" /></Text>
    </View>
  );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f1f1f1',
      alignItems: 'center',
      justifyContent: 'center'
      },
      image: {
      width: 200,
      height: 200,
      },
      titulo: {
      fontSize: 30,
      color: '#34434D',
      fontWeight: 'bold',
      },
      subTitulo: {
      fontSize: 20,
      color: 'gray'
      },
      textInput: {
      borderWidth: 1,
      borderColor: 'black',
      paddingStart: 30,
      padding: 10,
      width: '80%',
      marginTop: 20,
      borderRadius: 30,
      backgroundColor: '#fff'
      },
      olvideContra: {
      fontSize: 16,
      marginTop: 10,
      },
      registrate: {
      fontSize: 20,
      marginTop: 19,
      },
      button2: {
        width: 100,
        height: 20,
      }
  });
  
  
  function handleLogin() {
    // Aquí puedes implementar la lógica de inicio de sesión
    // Por ejemplo, puedes navegar a la pantalla de inicio después de iniciar sesión.

  }
  
  
  