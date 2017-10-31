import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput} from 'react-native'
import styles from '../vocabTestStyles'

export default class VocabTestQuestion extends Component {

  state = {
    answerValue: null
  };

  onSubmit = () => {
    this.props.onSubmit(this.state.answerValue);
    this.setState({answerValue: null});
  };

  onPass = () => {
    this.props.onSubmit(null);
    this.setState({answerValue: null});
  };

  render() {
    return (
      <View style={styles.container}>

        <View style={styles.questionContainer}>
          <Text style={styles.questionText}>{this.props.question}</Text>
        </View>

        <View style={styles.answerContainer}>
          <TextInput
            style={styles.questionText}
            onChangeText={(value) => this.setState({answerValue: value})}
            value={this.state.answerValue}
            placeholder={"Enter your answer here"}
          />
        </View>

        <View style={styles.finaliseContainer}>
          <TouchableOpacity onPress={this.onPass} style={{flex: 1}}>
            <View style={styles.finaliseButton}>
              <Text style={styles.finaliseButtonText}>Pass</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.onSubmit} style={{flex: 1}}>
            <View style={styles.finaliseButton}>
              <Text style={styles.finaliseButtonText}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>

      </View>);
  }
}
