import React, { Component } from 'react'
import { AppRegistry, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import styles from '../vocabTestStyles'

export default class VocabCategoryMenu extends Component {
  render() {
    const buttonList = this.props.categories.map(({name, index}) => {
      return (
        <TouchableOpacity
          style={{ flex: 1 }}
          onPress={() => this.props.onSelect(index)}
          key={index}
        >
          <View style={styles.finaliseButton}>
            <Text style={styles.finaliseButtonText}>{name}</Text>
          </View>
        </TouchableOpacity>
      )
    });
    return <View style={styles.categoryMenuContainer}>{buttonList}</View>
  }
}