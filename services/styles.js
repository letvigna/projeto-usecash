import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f7f9f8',
    padding: 15,
  },
  questionView: {
    flex: 1.2,
    justifyContent: 'center',
    marginBottom: -15
  },
  questionHeader: {
    fontSize: 20,
    color: '#ef8f5a',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  questionType: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#9c8f89',
    textAlign: 'center',
    marginBottom: 3,
  },
  question: {
    fontSize: 18,
    color: '#514545',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  answersView: {
    flex: 3,
    justifyContent: 'center',
  },
  answerButton: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#8abf84',
    borderRadius: 15,
    marginBottom: 5,
  },
  answer: {
    fontSize: 18,
    textAlign: 'center',
  },
  playAgainButton: {
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#9c8f89',
    borderRadius: 30,
    marginTop: 15,
    paddingHorizontal: 30,
  },
  playAgainText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#f7f9f8',
    textAlign: 'center',
  }
});

export default styles;
