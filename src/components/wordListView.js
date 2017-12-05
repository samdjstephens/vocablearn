import React from 'react'
import { View, Text } from 'react-native'

/*
Components
- WordPairRow: contains the Lithuanian, English, and "your answer" (optional) info
- LabelWordRow: contains a label and a word
- WordListView: list of WordPairRow's
 */


export default LabelWordRow = (props) => (
  <View style={{flex: 1, flexDirection: 'row'}} key={props.keyIx} >
    <View style={{flex: 1, backgroundColor: 'steelblue'}}>
      <Text>
        {props.label}
      </Text>
    </View>
    <View style={{flex: 4, paddingLeft: 5}}>
      <Text>
        {props.word}
      </Text>
    </View>
  </View>
);