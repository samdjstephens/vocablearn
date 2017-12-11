import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import _ from 'lodash';


export default class ToggleButton extends React.Component {

  changeSelection = () => {
    const newSelected = _.find(this.props.options, item => item.value !== this.props.selectedValue);
    this.props.onSelect(newSelected.value);
  };

  selectedLabel = () => (
    _.find(this.props.options, item => item.value === this.props.selectedValue)
      .label
  );

  render() {
    return (
      <TouchableOpacity
        style={{ padding: 10, margin: 15, backgroundColor: '#7fdbc5', borderRadius: 5 }}
        onPress={this.changeSelection}
      >
        <View>
          <Text style={{ fontSize: 18, textAlign: 'center' }}>{this.selectedLabel()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
