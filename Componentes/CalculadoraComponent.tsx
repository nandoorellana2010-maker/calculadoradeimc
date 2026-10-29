import { View, Text } from 'react-native'
import React, { useState } from 'react'

export default function CalculadoraComponent() {
    const [peso, setPeso]=useState<number>(0)
    const [altura, setAltura]=useState<number>(0)

    function calcularPeso(){
        setPeso
    }

    function calcularAltura(){
        setAltura
    }

  return (
    <View>
      <Text></Text>

    </View>
  )
}