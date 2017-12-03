import React, { Component } from 'react'
import {AppRegistry, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../vocabTestStyles'
import DirectionPicker from "./directionPicker";

export default class VocabCategoryMenu extends Component {
  render() {
    const buttonList = this.props.categories.map(({name, index}) => {
      return (
        <TouchableOpacity
          style={{ height: 70 }}
          onPress={() => this.props.onSelect(index)}
          key={index}
        >
          <View style={styles.finaliseButton}>
            <Text style={styles.finaliseButtonText}>{name}</Text>
          </View>
        </TouchableOpacity>
      )
    });
    return (
      <View style={styles.categoryMenuContainer}>
        <View style={{flex: 4}}>
          <ScrollView style={{flex: 1}}>{buttonList}</ScrollView>
        </View>
        <View style={{flex: 2, backgroundColor: 'white'}}>
          <DirectionPicker
            style={{flex: 1, padding: 0, margin: 0}}
            onSelect={(lang) => this.props.onQuestionLanguageSelect(lang)}
            questionLanguage={this.props.questionLanguage}
          />
        </View>
      </View>
    );
  }
}