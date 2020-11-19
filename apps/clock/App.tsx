import 'react-native-gesture-handler';
import React from 'react';
import {title} from '@monorepo-example/utils/stringUtils';
import {Button, Text, View} from 'react-native';
import {add, multiply} from '@monorepo-example/utils/mathUtils';
import {Counter} from '@monorepo-example/components';
import {Provider as PaperProvider} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Details" component={DetailsScreen} />
      </Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
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
        <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
      </View>
    </PaperProvider>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}
