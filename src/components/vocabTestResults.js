import React, { Component } from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import styles from '../vocabTestStyles'
import WordPairRow from "./wordListView";

export default class VocabTestResults extends Component {

  createAnsRows = ({item}) => {
    console.log(item);
    return (
      <WordPairRow
        showUserAnswer={true}
        labelColour={item.correct ? '#99d8bc' : '#eaa5a5'}
        {...item}
      />
    );
  };

  renderSeparator = () => (
    <View style={{backgroundColor: 'white', height: 2}} />
  );

  numCorrect = () => (
    this.props.answerData
      .map(qData => qData.correct)
      .reduce((acc, next) => acc + next)
  );

  numQuestions = () => (
    this.props.answerData.length
  );

  render() {
    // const wrongAnswers = this.props.wrongAnswers.map(this.createAnsRows);
    return (
      <View style={styles.container}>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Your answers ({`${this.numCorrect()} / ${this.numQuestions()}`})</Text>
        </View>

        <View style={styles.answerContainer}>
          {/*<Text style={styles.questionText}>Wrong answers:</Text>*/}
          <FlatList
            data={this.props.answerData}
            renderItem={this.createAnsRows}
            ItemSeparatorComponent={this.renderSeparator}
          />
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
