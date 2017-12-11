import React, { Component } from 'react'
import {AppRegistry, View, Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native'
import styles from '../vocabTestStyles'
import ToggleButton from './toggleButton';

export default class VocabCategoryMenu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0
    }
  }

  startTest = () => {
    this.props.onSelect(this.state.selectedIndex, 'test');
  };

  startRevise = () => {
    this.props.onSelect(this.state.selectedIndex, 'revise');
  };

  onPickCategory = (selectedIndex) => {
    this.setState({ selectedIndex });
  };

  render() {
    const buttonList = this.props.categories.map(({name, index}) => {
      return (
        <TouchableOpacity
          style={{ height: 70 }}
          onPress={() => this.onPickCategory(index)}
          key={index}
        >
          <View style={{
            flex: 1,
            backgroundColor: this.state.selectedIndex === index ? '#50c1f7' : 'steelblue',
            justifyContent: 'center'
          }}>
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
        <View style={{
          flex: 2,
          backgroundColor: 'white',
          justifyContent: 'center'
        }}>
          <Text style={{ fontSize: 18, margin: 10, textAlign: 'center' }}>Question Language</Text>
          <ToggleButton
            // style={{flex: 1, padding: 0, margin: 0}}
            onSelect={(lang) => this.props.onQuestionLanguageSelect(lang)}
            selectedValue={ this.props.questionLanguage }
            options={
              [
                { label: 'Lithuanian', value: 'ltu' },
                { label: 'English', value: 'eng' }
              ]
            }
          />
        </View>
        <View style={styles.finaliseContainer}>
          <TouchableOpacity onPress={this.startRevise} style={{flex: 1}}>
            <View style={styles.sessionTypeButton}>
              <Text style={styles.sessionTypeButtonText}>Revise</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.startTest} style={{flex: 1}}>
            <View style={styles.sessionTypeButton}>
              <Text style={styles.sessionTypeButtonText}>Test</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}