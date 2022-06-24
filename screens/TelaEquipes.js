import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader'

export default class TelaEquipes extends React.Component
{
  irPraTelaBotao=(cor)=> 
  {
    this.props.navigation.navigate('TelaBotao', {color: cor})
  }

  render()
  {
    return /* não estava aceitando o ( do return na linha de baixo */ (
      <View> 
        <AppHeader/>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'blue'}]}
          onPress={()=>this.irPraTelaBotao('blue')}>
          <Text style={styles.buttonText}>
            Equipe Azul
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'red'}]}
          onPress={()=>this.irPraTelaBotao('red')}>
          <Text style={styles.buttonText}>
            Equipe Vermelha
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'green'}]}
          onPress={()=>this.irPraTelaBotao('green')}>
          <Text style={styles.buttonText}>
            Equipe Verde
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
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





