import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import db from '../Config';
import SoundButton from '../components/SoundButton';


export default class TelaRanking extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      ranking: [],
    };
  }

  showRanking=()=>{
    var equipes = [];
    var equipesRef = db.ref('Equipes/');
    equipesRef.on('value', (data)=>{
      var listaEquipes = data.val();
      console.log(listaEquipes);
      for(var equipe in listaEquipes)
      {
        console.log('for');
        if(listaEquipes[equipe]['isButtonPressed'] === true)
        {
          console.log('if');
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

  componentDidMount(){
    this.showRanking();
    console.log('componentDidMount');
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
    );
  }
}




