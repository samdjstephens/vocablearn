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
        style={{ }}
        onPress={this.changeSelection}
      >
        <View>
          <Text>{this.selectedLabel()}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}
