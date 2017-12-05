import React, { Component } from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import styles from '../vocabTestStyles'
import LabelWordRow from "./wordListView";

export default class VocabTestResults extends Component {

  createWrongAnsRows = ({item}) => {
    console.log(item);
    const answer = item.ans === null ? "Passed" : item.ans;
    return (
      <View>
        <LabelWordRow
          keyIx={1}
          label={'Lithuanian'}
          word={item.ltu}
        />
        <LabelWordRow
          keyIx={2}
          label={'English'}
          word={item.eng}
        />
        <LabelWordRow
          keyIx={3}
          label={'You'}
          word={answer}
        />
      </View>
    );
  };

  renderSeparator = () => (
    <View style={{backgroundColor: 'white', height: 2}} />
  );

  render() {
    // const wrongAnswers = this.props.wrongAnswers.map(this.createWrongAnsRows);
    return (
      <View style={styles.container}>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>Number correct: {this.props.numCorrect}</Text>
        </View>

        <View style={styles.answerContainer}>
          <Text style={styles.questionText}>Wrong answers:</Text>
          <FlatList
            data={this.props.wrongAnswers}
            renderItem={this.createWrongAnsRows}
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
