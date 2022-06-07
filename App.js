import * as React from 'react';
import { View } from 'react-native';
import TelaEquipes from './screens/TelaEquipes';
import TelaBotao from './screens/TelaBotao';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  TelaEquipes: TelaEquipes,
  TelaBotao: TelaBotao,
})

const AppContainer = createAppContainer(AppNavigator)






