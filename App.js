import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import QuestionScreen from './screens/QuestionScreen';
import EndScreen from './screens/EndScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="QuestionScreen" headerMode="none">
        <Stack.Screen name="QuestionScreen" component={QuestionScreen} />
        <Stack.Screen name="EndScreen" component={EndScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
