import React, {Component} from 'react'
import { View, Button, Text, StyleSheet } from 'react-native';
import TelaEquipes from './screens/TelaEquipes';
import TelaBotao from './screens/TelaBotao';
import TelaRanking from './screens/TelaRanking';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import db from './Config';


export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer />
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  TelaEquipes: TelaEquipes,
  TelaBotao: TelaBotao,
  TelaRanking: TelaRanking,
})

const AppContainer = createAppContainer(AppNavigator);

 
