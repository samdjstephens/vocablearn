import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'
import VocabTest from './vocabTest'
import VocabCategoryMenu from './vocabCategoryMenu'
import words from '../words'

export default class VocabLearn extends React.Component {

  getBaseState() {
    return {screen: 'menu', testCategoryIndex: null};
  }

  constructor(props) {
    super(props);
    this.state = this.getBaseState();
  }

  render() {
    if (this.state.screen === 'menu') {
      vocabLearnComponent = <VocabCategoryMenu
                              categories={words.map((category, index) => ({ name: category.name, index }))}
                              onSelect={(index) => this.setVocabTestForIndex(index)}
                            />;
    }
    else {
      vocabLearnComponent = <VocabTest
                              words={words[this.state.testCategoryIndex].words}
                              onComplete={() => this.returnToMenu()}
                            />
    }
    return (
      <View style={{flex: 1}}>{ vocabLearnComponent }</View>
    );
  }

  setVocabTestForIndex(index) {
    this.setState({ screen: 'test', testCategoryIndex: index })
  }

  returnToMenu() {
    this.setState(this.getBaseState())
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
