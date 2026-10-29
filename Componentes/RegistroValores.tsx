import { View, Text, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TextInput, Button } from 'react-native'
import { Valores } from '../Modelos/Valores'

export default function RegistroValores() {

    const [peso, setPeso]=useState<string>('')
    const [altura, setAltura]=useState<string>('')
    const [resultado, setResultado]=useState<number>(0)
    const [clasificacion, setClasificacion]=useState<string>('')

    function EjecutarCalculo(){
        const entradaPeso = parseFloat(peso)
        const entradaAltura = parseFloat(altura)

        if(isNaN(entradaPeso) || isNaN(entradaAltura) || entradaAltura <=0){
            Alert.alert('Error, ingresa valores válidos para peso y altura')
            return
        }

        const valor:Valores={
            peso: entradaPeso,
            altura: entradaAltura,
            imc: entradaPeso / (entradaAltura * entradaAltura)
        }

        let categoria = ''

        if(valor.imc < 18.5) {
            categoria = 'Bajo Peso'
        } else if (valor.imc < 25){
            categoria = 'Peso normal'
        } else if (valor.imc < 30){
            categoria = 'Sobrepeso'
        } else {
            categoria = 'Obesidad'
        }

        setResultado (valor.imc)
        setClasificacion(categoria

        )
        Alert.alert('Su IMC es', `${valor.imc.toFixed(2)} - ${categoria}`)
        console.log('IMC: ', valor.imc)   
    }

  return (
    <View>
      <Text>Calculemos su IMC</Text>

      <TextInput placeholder='Ingrese su peso en kg'
      onChangeText={setPeso}
      value={peso}></TextInput>

      <TextInput placeholder='Ingrese su altura en metros'
      onChangeText={setAltura}
      value={altura}></TextInput>

      <Button title ="Calcular IMC"
      onPress={EjecutarCalculo}></Button>

      {resultado !== null && (
        <Text>
            Resultado: {resultado.toFixed(2)} - {clasificacion}
        </Text>
      )}
    </View>
  )
}