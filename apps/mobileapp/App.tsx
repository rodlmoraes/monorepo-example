import React from 'react';
import {title} from '@monorepo-example/utils/stringUtils';
import {Text, View} from 'react-native';
import {add, multiply} from '@monorepo-example/utils/mathUtils';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={{fontSize: 24}}>{title}</Text>
        <Text style={{fontSize: 16, marginVertical: 16}}>
          {'1 + 1 = '}
          {add(1, 1)}
        </Text>
        <Text style={{fontSize: 16, marginVertical: 16}}>
          {'2 * 2 = '}
          {multiply(2, 2)}
        </Text>
      </View>
    </PaperProvider>
  );
}
