import React from 'react'
import {View, Text, FlatList} from 'react-native'


const WordListView = (props) => {
  const renderSeparator = () => (
    <View style={{backgroundColor: 'white', height: 2}} />
  );

  const createAnsRows = ({item}) => {
    return (
      <WordPairRow
        showUserAnswer={item.correct !== undefined}
        labelColour={item.correct ? '#99d8bc' : '#eaa5a5'}
        {...item}
      />
    );
  };

  return (
    <FlatList
      data={props.wordData}
      renderItem={createAnsRows}
      ItemSeparatorComponent={renderSeparator}
    />
  );
};



const WordPairRow = (props) => {
  const userAnswerRowProps = {
    keyIx: 3,
    label: 'You',
    word: props.ans === null ? "Passed" : props.ans,
    labelColour: props.labelColour,
  };
  return (
    <View style={{ paddingVertical: 5 }}>
      <LabelWordRow
        keyIx={1}
        label={'LTU'}
        word={props.ltu}
        labelColour={props.labelColour}
      />
      <LabelWordRow
        keyIx={2}
        label={'ENG'}
        word={props.eng}
        labelColour={props.labelColour}
      />
      {
        props.showUserAnswer ? <LabelWordRow {...userAnswerRowProps} /> : null
      }
    </View>
  );
};


const LabelWordRow = (props) => (
  <View style={{flex: 1, flexDirection: 'row'}} key={props.keyIx} >
    <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row', backgroundColor: props.labelColour || 'skyblue'}}>
      <Text style={{fontSize: 18}}>
        {props.label}
      </Text>
    </View>
    <View style={{flex: 4, paddingLeft: 5}}>
      <Text style={{fontSize: 18}}>
        {props.word}
      </Text>
    </View>
  </View>
);


export default WordListView;