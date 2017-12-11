import React, { Component } from 'react'
import VocabTest from "./vocabTest";
import {Text, View} from "react-native";
import VocabRevise from "./vocabRevise";

export default class VocabSession extends Component {

  render() {
    let sessionComponent;
    if (this.props.sessionType === 'test') {
      sessionComponent = <VocabTest
                           words={this.props.words}
                           onComplete={() => this.props.onComplete()}
                           questionLanguage={this.props.questionLanguage}
                          />;
    }
    else {
      sessionComponent = <VocabRevise
                           words={this.props.words}
                           onComplete={() => this.props.onComplete()}
                          />;

    }
    return (
      <View style={{flex: 1}}>{ sessionComponent }</View>
    );
  }
}
