/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import Button from 'react-native-button';
import dismissKeyboard from 'dismissKeyboard';
import Slider from 'react-native-slider';

import {
  AppRegistry,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback
} from 'react-native';

export default class TipCalc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      tip: '0.00',
      value: 0,
      total: 0
   };
  }
  _calculate(pct) {
    var bill = this.state.text;
    var tip = bill * pct;
    tip = tip.toFixed(2);
    var total = parseFloat(bill) + parseFloat(tip);
    this.setState({total});
    this.setState({tip});
  }

  render() {
    return (
    <TouchableWithoutFeedback onPress={() => dismissKeyboard()}>
      <View style={styles.container}>
        <Text style={styles.hero} onPress={() => dismissKeyboard()}>
          EZ Tip Calc
        </Text>
        <Text style={styles.heading}>
          Bill Amount:
        </Text>
        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
          keyboardType={'numeric'}
        />
        <Text style={styles.heading}>
          How much do you want to tip?
        </Text>
        <Slider
          value={this.state.value}
          step={0.05}
          trackStyle={styles.track}
          thumbStyle={styles.thumb}
          onValueChange={(value) => this.setState({value})} />
        <Button style={styles.button}
          onPress={() => this._calculate(this.state.value)}>
          Calculate {(this.state.value * 100).toFixed(0)}%
        </Button>
        <Text style={styles.heading}>Tip amount:</Text>
        <Text style={styles.result}>{'$' + this.state.tip}</Text>
        <Text style={styles.heading}>Bill total:</Text>
        <Text style={styles.result}>{'$' + this.state.total}</Text>
      </View>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#a89890'
  },
  hero: {
    fontWeight: 'bold',
    fontSize: 32,
    color: '#4d4d4d'
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 25,
    color: '#4d4d4d'
  },
  button: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    height: 40,
    borderRadius: 2,
    color: 'white',
    backgroundColor: '#4d4d4d',
    shadowColor: 'black',
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowRadius: 2
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    color: '#4d4d4d'
  },
  result: {
    fontWeight: 'bold',
    fontSize: 22,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
    marginTop: 10,
    color: '#4d4d4d'
  },
  track: {
    height: 2,
    borderRadius: 1,
  },
  thumb: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 2,
    shadowOpacity: 0.35,
  }
});

AppRegistry.registerComponent('TipCalc', () => TipCalc);
