import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from '../Config';

export default class TelaEquipes extends React.Component
{
  constructor()
  {
    super();
    this.state = {
      blueStatus: true,
      redStatus: true,
      greenStatus: true,
      yellowStatus: true,
    };
  }

  componentDidMount()
  {
    var equipesRef = db.ref('Equipes/');
    equipesRef.on('value', (data)=>{
      var habilitacao = data.val();
      this.setState({
        blueStatus: habilitacao.blue.habilitado,
        redStatus: habilitacao.red.habilitado,
        greenStatus: habilitacao.green.habilitado,
        yellowStatus: habilitacao.yellow.habilitado,
      })
      console.log(habilitacao);})
  }

  irPraTelaBotao=(cor)=> 
  {
    var equipesRef = db.ref('Equipes/' + cor);
    equipesRef.update({
      habilitado: false,
    })
    this.props.navigation.navigate('TelaBotao', {color: cor})
  }

  render()
  {
    return (
      <View> 
        <AppHeader/>
        <TouchableOpacity
          disabled = {!this.state.blueStatus}
          style={[styles.button, {backgroundColor: 'blue'}]}
          onPress={()=>this.irPraTelaBotao('blue')}>
          <Text style={styles.buttonText}>
            Equipe Azul
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled = {!this.state.redStatus}
          style={[styles.button, {backgroundColor: 'red'}]}
          onPress={()=>this.irPraTelaBotao('red')}>
          <Text style={styles.buttonText}>
            Equipe Vermelha
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled = {!this.state.greenStatus}
          style={[styles.button, {backgroundColor: 'green'}]}
          onPress={()=>this.irPraTelaBotao('green')}>
          <Text style={styles.buttonText}>
            Equipe Verde
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled = {!this.state.yellowStatus}
          style={[styles.button, {backgroundColor: 'yellow'}]}
          onPress={()=>this.irPraTelaBotao('yellow')}>
          <Text style={styles.buttonText}>
            Equipe Amarela
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 65,
    marginLeft: 75,
    borderWidth: 3,
    borderColor: 'rgb()128, 128, 128',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'rgb(128, 128, 128',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'italic',
    fontSize: 20,
  }
});





