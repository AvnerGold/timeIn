import { View, Text } from 'react-native'
import React from 'react'

export default function DatesBox({ id, name, password, category, month }) {
    console.log(id);
    console.log(name);
    console.log(password);
    console.log(category);
    console.log(month);// nothing apearing  
  return (
    <View>
      <Text>datbox works</Text>
    </View>
  )
}