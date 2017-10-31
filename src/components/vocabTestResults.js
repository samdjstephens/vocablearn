import React, { Component } from 'react'
import { View, Text, TouchableOpacity} from 'react-native'
import styles from '../vocabTestStyles'

export default class VocabTestResults extends Component {

  createWrongAnsRows = ({eng, ltu, ans}, ix) => {
    let answer = ans === null ? "Passed" : ans;
    return (
      <Text style={styles.wrongAnswerText} key={ix}>LTU: {ltu} ENG: {eng} You: {answer}</Text>
    );
  }

  render() {
    let wrongAnswers = this.props.wrongAnswers.map(this.createWrongAnsRows);
    return (
      <View style={styles.container}>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Number correct: {this.props.numCorrect}</Text>
        </View>

        <View style={styles.answerContainer}>
          <Text style={styles.questionText}>Wrong answers:</Text>
          {wrongAnswers}
        </View>

        <View style={styles.finaliseContainer}>
          <TouchableOpacity style={{flex: 1}} onPress={() => this.props.onTakeAnotherTest()}>
            <View style={styles.finaliseButton}>
              <Text style={styles.finaliseButtonText}>Take another test</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>);
  }
}
