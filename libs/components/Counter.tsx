import React, {useState} from 'react';
import {Text, View, Button} from 'react-native';

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <View>
      <Button onPress={() => setCounter(counter + 1)} title='Aperta-me jovem'/>
      <Text>contador: {counter}</Text>
    </View>
  )
}
