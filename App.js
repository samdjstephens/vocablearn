import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'
import VocabTest from './src/components/vocabTest'

export default class App extends React.Component {
  render() {
    return (
      <VocabTest />
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
