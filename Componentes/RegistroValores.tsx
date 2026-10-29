import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput, Button } from 'react-native'

export default function RegistroValores() {
    const [ingresoValores, setIngresoValores]=useState<number>()

    const [peso, setPeso]=useState<string>('')
    const [altura, setAltura]=useState<string>('')

    function EjecutarCalculo(){

    }

  return (
    <View>
      <Text>Calculemos su IMC</Text>
      <TextInput placeholder='Ingrese su peso en kg'
      onChangeText={setPeso}
      value='peso'></TextInput>
      <TextInput placeholder='Ingrese su altura en metros'
      onChangeText={setAltura}
      value='altura'></TextInput>
      <Button title ="Calcular IMC"
      onPress={EjecutarCalculo}></Button>
    </View>
  )
}