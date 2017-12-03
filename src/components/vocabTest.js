import React, { Component } from 'react'
import VocabTestQuestion from './vocabTestQuestion'
import VocabTestResults from './vocabTestResults'
import _ from 'lodash'

export default class VocabTest extends Component {


  constructor(props) {
    super(props);
    const [qLang, ansLang] = props.questionLanguage === 'ltu' ? ['ltu', 'eng'] : ['eng', 'ltu'];
    this.state = {
      currentQuestion: 0,
      qLang,
      ansLang,
      questions: _.sampleSize(props.words, 10),
    }
  }

  updateCurrentQuestion = (ans) => {
    let qData = this.getCurrentQuestionData();
    let {questions, currentQuestion} = this.state;
    qData.ans = ans;
    questions[currentQuestion] = qData;
    this.setState({questions: questions, currentQuestion: currentQuestion + 1});
  };

  getCurrentQuestionData = () => {
    const {questions, currentQuestion} = this.state;
    return currentQuestion < questions.length ? questions[currentQuestion] : null;
  };

  isAnswerCorrect = (qData) => {
    const correctAns = qData[this.state.ansLang];
    return qData.ans !== null && qData.ans.toLowerCase().trim() === correctAns ? 1 : 0;
  };

  numCorrectAnswers = () => {
    return this.state.questions
      .map(this.isAnswerCorrect)
      .reduce((a, b) => (a + b));
  };

  render() {
    const qData = this.getCurrentQuestionData();
    console.log(qData);
    let component = null;
    if (qData) {
      component = (<VocabTestQuestion question={qData[this.state.qLang]}
                                      onSubmit={this.updateCurrentQuestion}
                   />);
    } else {
      component = (<VocabTestResults
                      numCorrect={this.numCorrectAnswers()}
                      wrongAnswers={this.state.questions.filter(q => !this.isAnswerCorrect(q))}
                      onComplete={() => this.props.onComplete()}
                   />);
    }
    return component;
  }
}
