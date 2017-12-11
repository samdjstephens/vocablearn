import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import styles from '../vocabTestStyles'
import WordListView from "./wordListView";

export default class VocabRevise extends Component {

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Revise</Text>
        </View>

        <View style={styles.answerContainer}>
          <WordListView wordData={this.props.words} />
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
