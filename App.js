/*import * as React from 'react';*/
import React, {Component} from 'react'
import { View, Button, Text, StyleSheet } from 'react-native';
import TelaEquipes from './screens/TelaEquipes';
import TelaBotao from './screens/TelaBotao';
import TelaRanking from './screens/TelaRanking';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import db from './Config';

/*export default class App extends React.Component {
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

const AppContainer = createAppContainer(AppNavigator);*/
 
export default class App extends Component
{
  constructor()
  {
    super();
    this.state = {
      ranking: [],
    }
  }

  showRanking=()=>{
    var equipes = [];
    var equipesRef = db.ref('Equipes/');
    equipesRef.on('value', (data)=>{
      var listaEquipes = data.val();
      console.log(listaEquipes)
      for(var equipe in listaEquipes)
      {
        if(listaEquipes[equipe]['isButtonPressed'] === true)
        {
          listaEquipes[equipe]['equipeNome'] = equipe;
          equipes.push(listaEquipes[equipe]);
        }
      }
      equipes.sort(function(equipe1, equipe2){
        return equipe1.time - equipe2.time;
      });
      this.setState({ranking: equipes});
      equipes = [];
    });
  }

  resetDB=()=>{
    var resetDatabase = db.ref('Equipes/').set({
      blue: {
        isButtonPressed: false,
        time: 0
      },
      green: {
        isButtonPressed: false,
        time: 0
      },
      red: {
        isButtonPressed: false,
        time: 0
      },
      yellow: {
        isButtonPressed: false,
        time: 0
      },
    })
    this.setState({ranking: []});
  }

  componentDidMount(){
    this.showRanking;
  }

  render()
  {
    return(
      <View style = {{flex: 1}}>
      <View style = {{flex: 1, alignItens: 'center'}}>
      {this.state.ranking.map((equipe)=>(
        <View 
        style = {{
          width: 140, 
          height: 55, 
          borderWidth: 2,
          margin: 5,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: equipe.equipeNome,
          }}>
        <Text> {equipe.equipeNome.toUpperCase()} </Text>
        </View>
      ))}
      </View>
        <Button title = 'Reiniciar' style = {{width: 100, height: 30}} onPress = {this.resetDB}/>
      </View>
    )
  }
}




