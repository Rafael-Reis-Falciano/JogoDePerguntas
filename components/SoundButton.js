import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av';

class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={[styles.button, {backgroundColor: this.props.color}]}
        onPress={this.playSound}>
        <Text
          style={styles.buttonText}>
          P R E S S
        </Text>
      </TouchableOpacity>
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

export default SoundButton;
