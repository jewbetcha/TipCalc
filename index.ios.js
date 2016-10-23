// Entry
import React, { Component } from 'react';
import dismissKeyboard from 'dismissKeyboard';
import Header from './components/Header.js'
import Calculator from './components/Calc.js'

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';

export default class TipCalc extends Component {
  render() {
    return (
    <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
      <View style={styles.container}>
        <Header />
        <Calculator />
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

const primary = '#fff'
const secondary = '#1B1B3A'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: primary
  }
});

AppRegistry.registerComponent('TipCalc', () => TipCalc);
