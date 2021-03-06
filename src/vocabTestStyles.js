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
    justifyContent: 'center',
    flex: 1,
  },
  categoryMenuContainer: {
    backgroundColor: 'skyblue',
    flex: 1,
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
  },
  sessionTypeButton: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
  },
  sessionTypeButtonText: {
    color: 'steelblue',
    textAlign: 'center',
    fontSize: 18,
  },
})
