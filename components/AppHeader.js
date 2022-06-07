import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class AppHeader extends React.Component
{
  render()
  {
    return(
      <View style={styles.box}>  
      <Text style={styles.boxText}> Jogo de Perguntas </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    borderWidth: 5,
    borderColor: 'rgb(0, 180, 230)',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(0, 230, 256)',
    height: 70,
  },
  boxText: {
    fontWeight: 'bold',
    fontSize: 20,
  }
});

export default AppHeader;