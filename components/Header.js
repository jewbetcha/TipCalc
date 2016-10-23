import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text
} from 'react-native';

export default class Header extends Component {
  render () {
    return (
      <Text style={styles.hero}>EZ TipCalc</Text>
    )
  }
}

const primary = '#a89890'
const secondary = '#4d4d4d'

const styles = StyleSheet.create({
  hero: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 25,
    paddingBottom: 20,
    backgroundColor: '#EB5E28'
  }
});
