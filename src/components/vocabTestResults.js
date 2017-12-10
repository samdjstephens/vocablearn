import React, { Component } from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import styles from '../vocabTestStyles'
import WordListView from "./wordListView";

export default class VocabTestResults extends Component {

  numCorrect = () => (
    this.props.answerData
      .map(qData => qData.correct)
      .reduce((acc, next) => acc + next)
  );

  numQuestions = () => (
    this.props.answerData.length
  );

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Your answers ({`${this.numCorrect()} / ${this.numQuestions()}`})</Text>
        </View>

        <View style={styles.answerContainer}>
          <WordListView wordData={this.props.answerData} />
        </View>

        <View style={styles.finaliseContainer}>
          <TouchableOpacity style={{flex: 1}} onPress={() => this.props.onComplete()}>
            <View style={styles.finaliseButton}>
              <Text style={styles.finaliseButtonText}>Return to Menu</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>);
  }
}
