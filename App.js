import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'
import VocabLearn from './src/components/vocabLearn'

export default class App extends Component {
  render() {
    return (
      <VocabLearn />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
