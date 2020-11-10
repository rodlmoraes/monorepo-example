import React from 'react';
import {title} from '@monorepo-example/utils/stringUtils';
import {Text, View} from 'react-native';
import {add, multiply} from '@monorepo-example/utils/mathUtils';
import {Counter} from '@monorepo-example/components';
import {Provider as PaperProvider} from 'react-native-paper';

export default function App() {
  return (
    <PaperProvider>
      <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <Text style={{fontSize: 24}}>SECOND {title}</Text>
        <Text style={{fontSize: 16, marginVertical: 16}}>
          {'3 + 3 = '}
          {add(3, 3)}
        </Text>
        <Text style={{fontSize: 16, marginVertical: 16}}>
          {'4 * 4 = '}
          {multiply(4, 4)}
        </Text>
        <Counter />
      </View>
    </PaperProvider>
  );
}
