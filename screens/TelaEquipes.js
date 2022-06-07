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
    return
    (
      <View> 
        <AppHeader/>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'rgb(0, 100, 150)'}]}
          onPress={()=>this.irPraTelaBotao('rgb(0, 100, 150')}>
          <Text style={styles.buttonText}>
            Equipe azul
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'rgb(200, 20, 20)'}]}
          onPress={()=>this.irPraTelaBotao('rgb(200, 20, 20)')}>
          <Text style={styles.buttonText}>
            Equipe vermelha
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'rgb(0, 200, 80)'}]}
          onPress={()=>this.irPraTelaBotao('rgb(0, 200, 80)')}>
          <Text style={styles.buttonText}>
            Equipe verde
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'rgb(180, 250, 130)'}]}
          onPress={()=>this.irPraTelaBotao('rgb(180, 250, 130)')}>
          <Text style={styles.buttonText}>
            Equipe amarela
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 200,
    marginLeft: 75,
    borderWidth: 7,
    borderColor: 'rgb(180, 20, 20)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'rgb(250, 30, 30)',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 30,
  }
});





