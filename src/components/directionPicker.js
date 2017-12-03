import React, { Component } from 'react'
import {Picker} from "react-native";


export default class DirectionPicker extends React.Component {
  render() {
    return (
      <Picker
        selectedValue={this.props.questionLanguage}
        onValueChange={(itemValue, itemIndex) => this.props.onSelect(itemValue)}
      >
        <Picker.Item label="Lithuanian" value="ltu" />
        <Picker.Item label="English" value="eng" />
      </Picker>
    );
  }
}