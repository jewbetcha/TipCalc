// Main calculator component
import React, { Component } from 'react';
import Button from 'react-native-button';
import Slider from 'react-native-slider';
import dismissKeyboard from 'dismissKeyboard';

import {
  StyleSheet,
  TextInput,
  View,
  Text
} from 'react-native';

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    // Set our initial states
    this.state = {
      text: '',
      tip: '0.00',
      value: 0.2,
      total: 0
   };
  }
  _calculate(pct) {
    // Hide the keyboard when we do the calculation
    dismissKeyboard();
    var bill = this.state.text;
    var tip = bill * pct;
    tip = tip.toFixed(2);
    var total = parseFloat(bill) + parseFloat(tip);
    total = total.toFixed(2);
    // Check to make sure we have a value to calculate
    if (isNaN(total)) {
      total = 0;
      this.setState({total});
    }
    else {
      this.setState({total});
      this.setState({tip});
    }
  }

  render() {
    return (
      <View>
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
          onPress={() =>
            this._calculate(this.state.value)
          }>
          Calculate {(this.state.value * 100).toFixed(0)}%
        </Button>
        <Text style={styles.heading}>Tip amount:</Text>
        <Text style={styles.result}>{'$' + this.state.tip}</Text>
        <Text style={styles.heading}>Bill total:</Text>
        <Text style={styles.result}>{'$' + this.state.total}</Text>
      </View>
    )
  }
}

const primary = '#fff'
const secondary = '#1B1B3A'

// Styles
const styles = StyleSheet.create({
  heading: {
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 25,
    color: secondary
  },
  button: {
    padding: 10,
    margin: 10,
    height: 40,
    borderRadius: 2,
    color: 'white',
    backgroundColor: '#EB5E28',
    shadowColor: 'black',
    shadowOffset: {
      height: 5,
      width: 5
    },
    shadowRadius: 2
  },
  input: {
    margin: 10,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    color: secondary
  },
  result: {
    margin: 10,
    fontWeight: 'bold',
    fontSize: 22,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
    marginTop: 10,
    color: secondary
  },
  track: {
    height: 2,
    borderRadius: 1,
    marginRight: 10,
    marginLeft: 10
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
})
