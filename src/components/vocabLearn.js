import React from 'react'
import { View } from 'react-native'
import VocabSession from './vocabSession'
import VocabCategoryMenu from './vocabCategoryMenu'
import words from '../words'

export default class VocabLearn extends React.Component {

  getBaseState() {
    return {screen: 'menu', vocabCategoryIndex: null, questionLanguage: 'ltu'};
  }

  constructor(props) {
    super(props);
    this.state = this.getBaseState();
  }

  onQuestionLanguageSelect(questionLanguage) {
    this.setState({ questionLanguage });
  }

  render() {
    let vocabLearnComponent;
    if (this.state.screen === 'menu') {
      vocabLearnComponent = <VocabCategoryMenu
                              categories={words.map((category, index) => ({ name: category.name, index }))}
                              onSelect={(index, sessionType) => this.setVocabSessionForIndex(index, sessionType)}
                              onQuestionLanguageSelect={(lang) => this.onQuestionLanguageSelect(lang)}
                              questionLanguage={this.state.questionLanguage}
                            />;
    }
    else {
      vocabLearnComponent = <VocabSession
                              sessionType={this.state.screen}
                              words={words[this.state.vocabCategoryIndex].words}
                              onComplete={() => this.returnToMenu()}
                              questionLanguage={this.state.questionLanguage}
                            />
    }
    return (
      <View style={{flex: 1}}>{ vocabLearnComponent }</View>
    );
  }

  setVocabSessionForIndex(index, sessionType) {
    this.setState({ screen: sessionType, vocabCategoryIndex: index })
  }

  returnToMenu() {
    this.setState(this.getBaseState())
  }
}