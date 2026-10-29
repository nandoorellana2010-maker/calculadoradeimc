import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CalculadoraComponent from './Componentes/CalculadoraComponent';
import RegistroValores from './Componentes/RegistroValores';

export default function App() {
  useEffect(()=>{

  })
  return (
    <View style={styles.container}>
      <Text>Calculadora de Indice de Masa Corporal</Text>
      <CalculadoraComponent></CalculadoraComponent>
      <RegistroValores></RegistroValores>
      <StatusBar style="auto" />
    </View>
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
