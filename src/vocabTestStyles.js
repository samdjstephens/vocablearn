import { StyleSheet } from 'react-native'


export default styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  questionContainer: {
    height: 100,
    backgroundColor: 'skyblue',
    paddingTop: 50
  },
  questionText: {
    textAlign: 'center',
    fontSize: 24,
    height: 40
  },
  wrongAnswerText: {
    fontSize: 16,
    height: 20,
    textAlign: 'center'
  },
  answerContainer: {
    justifyContent: 'space-between'
  },
  categoryMenuContainer: {
    flexDirection: 'column',
    backgroundColor: 'skyblue',
    height: 300,
  },
  finaliseContainer: {
    height: 70,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  finaliseButton: {
    flex: 1,
    backgroundColor: 'steelblue',
    justifyContent: 'center'
  },
  finaliseButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18
  }
})
